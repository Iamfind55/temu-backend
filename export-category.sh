#!/bin/bash

# Export Category Table from Local Database
# This script exports the category table to SQL and CSV formats

set -e

echo "=== Exporting Category Table ==="
echo ""

# Database connection details from .env
DB_HOST="localhost"
DB_PORT="5432"
DB_USER="macbook"
DB_NAME="temu_db"

# Output files
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
SQL_FILE="category_export_${TIMESTAMP}.sql"
CSV_FILE="category_export_${TIMESTAMP}.csv"
JSON_FILE="category_export_${TIMESTAMP}.json"

echo "Database: $DB_NAME"
echo "Table: category"
echo ""

# Export to SQL format
echo "1. Exporting to SQL format..."
pg_dump -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -t category --data-only --column-inserts -f $SQL_FILE

if [ $? -eq 0 ]; then
    echo "✓ SQL export complete: $SQL_FILE"
else
    echo "✗ SQL export failed"
    exit 1
fi

# Export to CSV format
echo ""
echo "2. Exporting to CSV format..."
psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -c "\COPY (SELECT * FROM category) TO '$CSV_FILE' WITH CSV HEADER"

if [ $? -eq 0 ]; then
    echo "✓ CSV export complete: $CSV_FILE"
else
    echo "✗ CSV export failed"
fi

# Export to JSON format
echo ""
echo "3. Exporting to JSON format..."
psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -t -c "SELECT json_agg(row_to_json(category.*)) FROM category" -o $JSON_FILE

if [ $? -eq 0 ]; then
    echo "✓ JSON export complete: $JSON_FILE"
else
    echo "✗ JSON export failed"
fi

# Show row count
echo ""
echo "4. Table statistics:"
ROW_COUNT=$(psql -h $DB_HOST -p $DB_PORT -U $DB_USER -d $DB_NAME -t -c "SELECT COUNT(*) FROM category")
echo "Total rows exported: $ROW_COUNT"

echo ""
echo "=== Export Complete ==="
echo ""
echo "Files created:"
ls -lh $SQL_FILE $CSV_FILE $JSON_FILE 2>/dev/null || echo "Some files may not have been created"
echo ""
echo "To import SQL file to production:"
echo "  psql -h PROD_HOST -p 5432 -U admin -d temu_db -f $SQL_FILE"
echo ""

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestedFields = getRequestedFields;
function getRequestedFields(info, path) {
    const fieldNodes = info.fieldNodes; // Nodes in the query
    const fragments = info.fragments; // Fragment definitions (if any)
    const fieldPath = info.fieldName;
    // const fieldPath = path.split(".");
    let currentNodes = fieldNodes;
    // Traverse the field path to the correct node
    for (const fieldName of [fieldPath, "data"]) {
        const nextNode = currentNodes.find((node) => node.kind === "Field" && node.name.value === fieldName);
        if (!nextNode || !nextNode.selectionSet) {
            return []; // No further selection set, return an empty array
        }
        currentNodes = nextNode.selectionSet.selections;
    }
    // Extract fields at the final level
    const fields = [];
    currentNodes.forEach((selection) => {
        var _a;
        if (selection.kind === "Field") {
            fields.push(selection.name.value);
        }
        else if (selection.kind === "FragmentSpread") {
            const fragment = fragments[selection.name.value];
            if ((_a = fragment === null || fragment === void 0 ? void 0 : fragment.selectionSet) === null || _a === void 0 ? void 0 : _a.selections) {
                fragment.selectionSet.selections.forEach((fragSelection) => {
                    if (fragSelection.kind === "Field") {
                        fields.push(fragSelection.name.value);
                    }
                });
            }
        }
    });
    return fields;
}

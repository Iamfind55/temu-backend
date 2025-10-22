import { GraphQLResolveInfo, FieldNode } from "graphql";

export function getRequestedFields(
  info: GraphQLResolveInfo,
  path: string
): string[] {
  const fieldNodes = info.fieldNodes; // Nodes in the query
  const fragments = info.fragments; // Fragment definitions (if any)
  const fieldPath = info.fieldName;
  // const fieldPath = path.split(".");

  let currentNodes: any = fieldNodes;

  // Traverse the field path to the correct node
  for (const fieldName of [fieldPath, "data"]) {
    const nextNode = currentNodes.find(
      (node: any) =>
        node.kind === "Field" && (node as FieldNode).name.value === fieldName
    ) as FieldNode | undefined;

    if (!nextNode || !nextNode.selectionSet) {
      return []; // No further selection set, return an empty array
    }

    currentNodes = nextNode.selectionSet.selections;
  }

  // Extract fields at the final level
  const fields: string[] = [];
  currentNodes.forEach((selection: any) => {
    if (selection.kind === "Field") {
      fields.push(selection.name.value);
    } else if (selection.kind === "FragmentSpread") {
      const fragment = fragments[selection.name.value];
      if (fragment?.selectionSet?.selections) {
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

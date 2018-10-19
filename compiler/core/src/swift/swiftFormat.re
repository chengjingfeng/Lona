let layerName = layerName => Format.camelCase(layerName) ++ "View";

/* let layerVariableName = (_: Types.layer, layer: Types.layer, variableName) =>
   layerName(layer.name) ++ upperFirst(variableName); */
/* TODO: Fix collisions between variables & params e.g. self.onPress and a parameter onPress */
let layerVariableName = (rootLayer, layer: Types.layer, variableName) =>
  layer === rootLayer ?
    /* TODO: Layer.equal */
    variableName : layerName(layer.name) ++ Format.upperFirst(variableName);

let variableNameFromIdentifier = (rootLayerName, path) =>
  switch (path) {
  | [head, ...tail] =>
    switch (head) {
    | "parameters" => List.hd(tail)
    | "layers" =>
      switch (tail) {
      | [second, ...tail] when second == rootLayerName =>
        List.tl(tail)
        |> List.fold_left(
             (a, b) => a ++ Format.upperFirst(b),
             List.hd(tail),
           )
      | [second, ...tail] =>
        tail
        |> List.fold_left(
             (a, b) => a ++ Format.upperFirst(b),
             layerName(second),
           )
      | _ => "BadIdentifierName"
      }
    | _ => head
    }
  | _ => "BadIdentifierName"
  };

let vectorClassName = (assetUrl: string): string => {
  let baseName = Node.Path.basename_ext(assetUrl, ".svg");
  let formattedName = Format.safeVariableName(baseName) |> Format.upperFirst;
  formattedName ++ "Vector";
};

let vectorParamName = (paramKey: Layer.vectorParamKey): string =>
  switch (paramKey) {
  | Fill => "Fill"
  | Stroke => "Stroke"
  };

let vectorVariableName = (vectorAssignment: Layer.vectorAssignment): string =>
  vectorAssignment.elementName ++ vectorParamName(vectorAssignment.paramKey);
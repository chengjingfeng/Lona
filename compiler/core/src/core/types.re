type compilerTarget =
  | JavaScript
  | Swift
  | Xml;

[@bs.deriving accessors]
type lonaType =
  | Reference(string)
  | Named(string, lonaType)
  | Function(
      list(
        {
          .
          "label": string,
          "type": lonaType
        }
      ),
      lonaType
    );

let undefinedType = Reference("Undefined");

let booleanType = Reference("Boolean");

let numberType = Reference("Number");

let stringType = Reference("String");

let colorType = Named("Color", stringType);

let textStyleType = Named("TextStyle", stringType);

let urlType = Named("URL", stringType);

let handlerType = Function([], Reference("Undefined"));

type lonaValue = {
  ltype: lonaType,
  data: Js.Json.t
};

type cmp =
  | Eq
  | Neq
  | Gt
  | Gte
  | Lt
  | Lte
  | Unknown;

type styles('a) = {
  alignItems: 'a,
  alignSelf: 'a,
  display: 'a,
  flex: 'a,
  flexDirection: 'a,
  textAlign: 'a,
  justifyContent: 'a,
  marginTop: 'a,
  marginRight: 'a,
  marginBottom: 'a,
  marginLeft: 'a,
  paddingTop: 'a,
  paddingRight: 'a,
  paddingBottom: 'a,
  paddingLeft: 'a,
  borderRadius: 'a,
  borderWidth: 'a,
  borderColor: 'a,
  width: 'a,
  height: 'a,
  textStyle: 'a,
};

type styleValues = styles(lonaValue);

type namedStyles('a) = {
  name: string,
  styles: styles('a)
};

type styleSets('a) = list(namedStyles('a));

[@bs.deriving jsConverter]
type parameter = {
  name: ParameterKey.t,
  ltype: lonaType,
  defaultValue: option(Js.Json.t)
};

type layerType =
  | View
  | Text
  | Image
  | Animation
  | Children
  | Component(string)
  | Unknown;

let layerTypeToString = x =>
  switch x {
  | View => "View"
  | Text => "Text"
  | Image => "Image"
  | Animation => "Animation"
  | Children => "Children"
  | Component(value) => value
  | Unknown => "Unknown"
  };

type layer = {
  typeName: layerType,
  name: string,
  parameters: ParameterMap.t(lonaValue),
  children: list(layer)
};

type sizingRule =
  | Fill
  | FitContent
  | Fixed(float);
// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Curry                      = require("bs-platform/lib/js/curry.js");
var Js_boolean                 = require("bs-platform/lib/js/js_boolean.js");
var Types$LonaCompilerCore     = require("./types.bs.js");
var StringMap$LonaCompilerCore = require("../containers/stringMap.bs.js");

function $$boolean(value) {
  return /* record */[
          /* ltype */Types$LonaCompilerCore.booleanType,
          /* data */Js_boolean.to_js_boolean(value)
        ];
}

function number(value) {
  return /* record */[
          /* ltype */Types$LonaCompilerCore.numberType,
          /* data */value
        ];
}

function string(value) {
  return /* record */[
          /* ltype */Types$LonaCompilerCore.stringType,
          /* data */value
        ];
}

function color(value) {
  return /* record */[
          /* ltype */Types$LonaCompilerCore.colorType,
          /* data */value
        ];
}

function textStyle(value) {
  return /* record */[
          /* ltype */Types$LonaCompilerCore.textStyleType,
          /* data */value
        ];
}

function url(value) {
  return /* record */[
          /* ltype */Types$LonaCompilerCore.urlType,
          /* data */value
        ];
}

var parameterDefaultValueMap = StringMap$LonaCompilerCore.fromList(/* :: */[
      /* tuple */[
        "text",
        /* record */[
          /* ltype */Types$LonaCompilerCore.stringType,
          /* data */""
        ]
      ],
      /* :: */[
        /* tuple */[
          "visible",
          /* record */[
            /* ltype */Types$LonaCompilerCore.booleanType,
            /* data */Js_boolean.to_js_boolean(/* true */1)
          ]
        ],
        /* :: */[
          /* tuple */[
            "numberOfLines",
            /* record */[
              /* ltype */Types$LonaCompilerCore.numberType,
              /* data */0
            ]
          ],
          /* :: */[
            /* tuple */[
              "backgroundColor",
              /* record */[
                /* ltype */Types$LonaCompilerCore.colorType,
                /* data */"transparent"
              ]
            ],
            /* :: */[
              /* tuple */[
                "image",
                /* record */[
                  /* ltype */Types$LonaCompilerCore.urlType,
                  /* data */""
                ]
              ],
              /* :: */[
                /* tuple */[
                  "alignItems",
                  /* record */[
                    /* ltype */Types$LonaCompilerCore.stringType,
                    /* data */"stretch"
                  ]
                ],
                /* :: */[
                  /* tuple */[
                    "alignSelf",
                    /* record */[
                      /* ltype */Types$LonaCompilerCore.stringType,
                      /* data */"flex-start"
                    ]
                  ],
                  /* :: */[
                    /* tuple */[
                      "flex",
                      /* record */[
                        /* ltype */Types$LonaCompilerCore.numberType,
                        /* data */0
                      ]
                    ],
                    /* :: */[
                      /* tuple */[
                        "flexDirection",
                        /* record */[
                          /* ltype */Types$LonaCompilerCore.stringType,
                          /* data */"column"
                        ]
                      ],
                      /* :: */[
                        /* tuple */[
                          "font",
                          /* record */[
                            /* ltype */Types$LonaCompilerCore.textStyleType,
                            /* data */"defaultStyle"
                          ]
                        ],
                        /* :: */[
                          /* tuple */[
                            "textStyle",
                            /* record */[
                              /* ltype */Types$LonaCompilerCore.textStyleType,
                              /* data */"defaultStyle"
                            ]
                          ],
                          /* :: */[
                            /* tuple */[
                              "justifyContent",
                              /* record */[
                                /* ltype */Types$LonaCompilerCore.stringType,
                                /* data */"flex-start"
                              ]
                            ],
                            /* :: */[
                              /* tuple */[
                                "marginTop",
                                /* record */[
                                  /* ltype */Types$LonaCompilerCore.numberType,
                                  /* data */0
                                ]
                              ],
                              /* :: */[
                                /* tuple */[
                                  "marginRight",
                                  /* record */[
                                    /* ltype */Types$LonaCompilerCore.numberType,
                                    /* data */0
                                  ]
                                ],
                                /* :: */[
                                  /* tuple */[
                                    "marginBottom",
                                    /* record */[
                                      /* ltype */Types$LonaCompilerCore.numberType,
                                      /* data */0
                                    ]
                                  ],
                                  /* :: */[
                                    /* tuple */[
                                      "marginLeft",
                                      /* record */[
                                        /* ltype */Types$LonaCompilerCore.numberType,
                                        /* data */0
                                      ]
                                    ],
                                    /* :: */[
                                      /* tuple */[
                                        "paddingTop",
                                        /* record */[
                                          /* ltype */Types$LonaCompilerCore.numberType,
                                          /* data */0
                                        ]
                                      ],
                                      /* :: */[
                                        /* tuple */[
                                          "paddingRight",
                                          /* record */[
                                            /* ltype */Types$LonaCompilerCore.numberType,
                                            /* data */0
                                          ]
                                        ],
                                        /* :: */[
                                          /* tuple */[
                                            "paddingBottom",
                                            /* record */[
                                              /* ltype */Types$LonaCompilerCore.numberType,
                                              /* data */0
                                            ]
                                          ],
                                          /* :: */[
                                            /* tuple */[
                                              "paddingLeft",
                                              /* record */[
                                                /* ltype */Types$LonaCompilerCore.numberType,
                                                /* data */0
                                              ]
                                            ],
                                            /* :: */[
                                              /* tuple */[
                                                "borderRadius",
                                                /* record */[
                                                  /* ltype */Types$LonaCompilerCore.numberType,
                                                  /* data */0
                                                ]
                                              ],
                                              /* :: */[
                                                /* tuple */[
                                                  "width",
                                                  /* record */[
                                                    /* ltype */Types$LonaCompilerCore.numberType,
                                                    /* data */0
                                                  ]
                                                ],
                                                /* :: */[
                                                  /* tuple */[
                                                    "height",
                                                    /* record */[
                                                      /* ltype */Types$LonaCompilerCore.numberType,
                                                      /* data */0
                                                    ]
                                                  ],
                                                  /* [] */0
                                                ]
                                              ]
                                            ]
                                          ]
                                        ]
                                      ]
                                    ]
                                  ]
                                ]
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

function defaultValueForParameter(name) {
  return Curry._2(StringMap$LonaCompilerCore.find, name, parameterDefaultValueMap);
}

exports.$$boolean                = $$boolean;
exports.number                   = number;
exports.string                   = string;
exports.color                    = color;
exports.textStyle                = textStyle;
exports.url                      = url;
exports.parameterDefaultValueMap = parameterDefaultValueMap;
exports.defaultValueForParameter = defaultValueForParameter;
/* parameterDefaultValueMap Not a pure module */

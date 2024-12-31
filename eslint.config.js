// TODO: replace @angular-eslint with angular-eslint package when it works with the new flat config properly
// Currently there is an issue getting the right parsing from the new flat config system
import angularEslint from '@angular-eslint/eslint-plugin'; // old package
import angularTemplate from '@angular-eslint/eslint-plugin-template'; // old package
import templateParser from '@angular-eslint/template-parser'; // old package
import eslintJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsEslintParser from '@typescript-eslint/parser';
import eslintImport from 'eslint-plugin-import-x';
import onlyWarn from "eslint-plugin-only-warn";
import playwright from "eslint-plugin-playwright";
import globals from 'globals';

const ignores = [
  "dist/**/*",
  "node_modules/**/*",
  "**/mocks-json/**",
  "**/mocks-ts/**",
  "coverage/**/*",
  "src/index.html"
];

export default [
  {
    files: [
      "src/**/*.ts",
      "cypress/e2e/**/*.ts",
      "cypress/support/**/*.ts"
    ],
    ignores,
    plugins: {
      '@typescript-eslint': tsEslint,
      '@angular-eslint': angularEslint,
      '@angular-eslint/template': angularTemplate,
      '@stylistic': stylistic,
      "only-warn": onlyWarn,
      'import-x': eslintImport,
    },
    // TODO: processInlineTemplates is not working with eslint v9 flat config yet
    // processor: angularEslint.processInlineTemplates,
    languageOptions: {
      parser: tsEslintParser,
      globals: {
        ...globals.browser
      },
      parserOptions: {
        project: [
          "tsconfig.eslint.json"
        ]
      },
    },
    rules: {
      ...eslintJs.configs.recommended.rules,
      ...tsEslint.configs.recommended.rules,
      ...angularEslint.configs.recommended.rules,
      ...stylistic.configs['recommended-flat'].rules,
      // ...eslintImport.configs.errors.rules,
      "@angular-eslint/component-selector": [
        "warn",
        {
          "type": "element",
          "prefix": "ae",
          "style": "kebab-case"
        }
      ], // (component selector moet prefix app- hebben en kebab-case zijn)
      "@angular-eslint/directive-selector": [
        "warn",
        {
          "type": "attribute",
          "prefix": "ae",
          "style": "camelCase"
        }
      ], // (directive selector moet prefix app- hebben en camelCase zijn)
      "@angular-eslint/no-async-lifecycle-method": [
        "warn"
      ], // (geen async lifecycle methods, angular wacht daar namelijk niet op )
      "@angular-eslint/no-conflicting-lifecycle": [
        "warn"
      ], // (geen conflicterende lifecycle methods bv. docheck en onchanges)
      "@angular-eslint/no-lifecycle-call": [
        "warn"
      ], // (geen lifecycle methods aanroepen in de component zelf)
      "@angular-eslint/no-output-native": [
        "warn"
      ], // (geen native events gebruiken als naan voor events)
      "@angular-eslint/no-output-on-prefix": [
        "warn"
      ], // output mag niet beginnen met on
      "@angular-eslint/relative-url-prefix": [
        "warn"
      ], // (alleen relatieve urls gebruiken, niet op angular vertrouwen)
      "@angular-eslint/use-component-selector": [
        "warn"
      ], // (gebruik component selector bij @component decorator)
      "@angular-eslint/use-injectable-provided-in": [
        "warn"
      ], // (gebruik providedIn bij @injectable decorator)
      "@stylistic/array-bracket-newline": [
        "warn",
        {
          "multiline": true,
          "minItems": 3
        }
      ], // bij meerdere item objecten in array, nieuwe regel voor elk item
      "@stylistic/array-element-newline": [
        "warn",
        {
          "multiline": true,
          "minItems": 3
        }
      ], // bij meerdere items in array, nieuwe regel voor elk item
      "@stylistic/arrow-spacing": ["warn", { "before": true, "after": true }], // (spaties rondom arrow functies)
      "@stylistic/block-spacing": ["warn"], // (spaties binnen blok {})
      "@stylistic/brace-style": ["warn", "1tbs"], // (1tbs style voor blokken, opening op dezelfde regel als statement, sluiting op nieuwe regel)
      "@stylistic/comma-dangle": ["warn", "always-multiline"], // (comma altijd aan het einde van een regel bij multiline)
      "@stylistic/comma-spacing": ["warn", { "before": false, "after": true }], // (geen spatie voor , wel spatie na)
      "@stylistic/comma-style": ["warn", "last"], // , spatie altijd eind van de regel
      "@stylistic/computed-property-spacing": ["warn", "never"], // (geen spatie tussen [] en key)
      "@stylistic/dot-location": ["warn", "property"], // (dot op dezelfde regel als property)
      "@stylistic/function-call-spacing": ["warn", "never"], // (geen spatie tussen functie naam en haakjes)
      "@stylistic/function-call-argument-newline": ["warn", "consistent"], // (consistent nieuwe regel voor argumenten)
      "@stylistic/indent": ["warn", 2, { "SwitchCase": 1 }], // (2 spaties indent, switch case 1 erbij)
      "@stylistic/key-spacing": ["warn", { "beforeColon": false, "afterColon": true }], // (geen spatie voor : wel spatie na)
      "@stylistic/object-curly-newline": ["warn", { "minProperties": 2, "consistent": true }], // (minimaal 2 properties voor nieuwe regel)
      "@stylistic/object-curly-spacing": ["warn", "always"], // (spaties binnen {} altijd)
      "@stylistic/object-property-newline": ["warn", { "allowAllPropertiesOnSameLine": true }], // (alle properties op dezelfde regel toegestaan)
      "@stylistic/member-delimiter-style": ["warn", {
        "multiline": { "delimiter": "comma", "requireLast": true },
        "singleline": { "delimiter": "comma", "requireLast": false },
        "overrides": {
          "interface": {
            "multiline": {
              "delimiter": "semi",
              "requireLast": true
            }
          }
        }
      }], // (comma aan het einde van de regel bij multiline, geen comma aan het einde van de regel bij singleline)
      "@stylistic/no-mixed-operators": ["warn"], // (geen mix van operators zonder haakjes)
      "@stylistic/no-multiple-empty-lines": ["warn", { "max": 2, "maxEOF": 1 }], // (max 2 empty lines, max 1 at end of file)
      "@stylistic/quotes": ["warn", "single"], // (quotes altijd single muv ` voor template literals)
      "@stylistic/quote-props": ["warn", "as-needed"], // (quotes alleen om keys als nodig)
      "@stylistic/rest-spread-spacing": ["warn", "never"], // (geen spatie tussen ... en variabele)
      "@stylistic/semi": ["warn", "always"], // (semicolon verplicht)
      "@stylistic/semi-style": ["warn", "last"], // (semicolon altijd einde regel),
      "@stylistic/semi-spacing": ["warn", {"before": false, "after": true}], // (geen spatie voor ; wel spatie na)
      "@stylistic/space-before-function-paren": ["warn", "never"], // (geen spatie tussen functie naam en haakjes)
      "@stylistic/space-before-blocks": ["warn", "always"], // (spatie voor blok)
      "@stylistic/spaced-comment": ["warn", "always"], // (spatie voor en na // of /* * */)
      "@stylistic/space-in-parens": ["warn", "never"], // (geen spatie in haakjes)
      "@stylistic/space-infix-ops": ["warn"], // (spatie tussen infix operators zoals +, -, *, /)
      "@stylistic/space-unary-ops": ["warn", {"words": true, "nonwords": false} ], // (spatie voor unary operators zoals new, delete, typeof, void, yield, maar niet !,!!,++,--)
      "@stylistic/switch-colon-spacing": ["warn", {"after": false, "before": true}], // (geen spatie voor : wel spatie na in switch voor case en default)
      "@stylistic/template-curly-spacing": ["warn", "never"], // (geen spaties in template literals)
      "@stylistic/type-annotation-spacing": ["warn", { "before": false, "after": true,"overrides": { "arrow": { "before": true, "after": true } } }], // (geen spatie voor : wel spatie na in type annotations)
      "@stylistic/wrap-iife": ["warn", "outside"], // (iife's moeten altijd in haakjes)
      "@stylistic/wrap-regex": ["warn"], // (regex altijd in haakjes)
      "@typescript-eslint/default-param-last": ["warn"], // (default/optionele parameters altijd als laatste) disable eslint zelf
      "@typescript-eslint/switch-exhaustiveness-check": ["warn"], // (switch moet altijd alle items afvangen of een default hebben)
      // "@typescript-eslint/naming-convention": ["warn"] // defineren wat we toestaan als naming convention https://typescript-eslint.io/rules/naming-convention/
      "@typescript-eslint/no-explicit-any": ["off"], // (any is toegestaan)
      "@typescript-eslint/no-magic-numbers": ["warn", {
        "detectObjects": false,
        "ignoreEnums": true,
        "ignore": [-1, 0, 1, 2, 10, 24, 60, 100, 500, 1000],
        "ignoreClassFieldInitialValues": true,
        "ignoreDefaultValues": true,
        "ignoreNumericLiteralTypes": true,
        "ignoreReadonlyClassProperties": true,
        "ignoreTypeIndexes": true
      }], // getallen moeten met een constant benoemd zijn, enkele uitzonderingen daar gelaten. Disable eslint zelf
      "@typescript-eslint/no-unsafe-unary-minus": ["warn"], // (geen minus voor alles wat geen number is)
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/no-unsafe-return": ["off"],
      "@typescript-eslint/no-unsafe-enum-comparison": ["off"],
      "@typescript-eslint/no-empty-function": ["warn"],
      "@typescript-eslint/no-shadow": ["warn", {
        "builtinGlobals": true,
        "ignoreOnInitialization": true,
        "ignoreTypeValueShadow": true,
        "ignoreFunctionTypeParameterNameValueShadow": true
      }], // (geen shadowing van variabelen (zelfde naam in child) om conflicten te voorkomen. Disable eslint zelf
      "@typescript-eslint/prefer-enum-initializers": ["warn"],
      "@typescript-eslint/prefer-includes": ["warn"],
      "@typescript-eslint/require-await": ["warn"], // (async functies moeten altijd awaiten)
      "@typescript-eslint/require-array-sort-compare": ["warn", { "ignoreStringArrays": true }],
      "@typescript-eslint/sort-type-constituents": ["warn"], // (sorteer types wanneer dat kan const a = A | B ipv const a = B | A)
      "curly": ["warn", "all"], // (curly braces verplicht bij if/else/for/while)
      "default-param-last": "off", // disable eslint over typescript-eslint regel
      "guard-for-in": ["warn"], // (gebruik if in for in loop om prototype properties te voorkomen)
      // "id-denylist": ["warn", "data", "callback"], // (gebruik geen data of callback als variabele naam)
      // "id-length": ["warn", { "min": 3, "properties": "never" }], // (variabele namen moeten minimaal 3 karakters zijn)
      "import-x/default": ["off"], // (uit want is niet nodig met typescript en ivm performance)
      "import-x/named": ["off"], // (uit want is niet nodig met typescript en ivm performance)
      "import-x/namespace": ["off"], // (uit want is niet nodig met typescript en ivm performance)
      "import-x/no-cycle": ["off", { "ignoreExternal": true }], // (imports mogen geen cycles hebben om te voorkomen dat ze zichzelf importeren, negeren voor externe imports. uit ivm performance maar af en toe checken kan geen kwaad)
      "import-x/no-deprecated": ["off"], // (uit ivm performance maar af en toe checken kan geen kwaad)
      "import-x/no-duplicates": ["off"], // (uit want is niet nodig met typescript en ivm performance)
      "import-x/no-named-as-default": ["off"], // (uit want is niet nodig met typescript en ivm performance)
      "import-x/no-named-as-default-member": ["off"], // (uit want is niet nodig met typescript en ivm performance)
      "import-x/no-unresolved": ["off"], // (uit want is niet nodig met typescript en ivm performance)
      "no-alert": ["warn"], // (geen alert gebruiken)
      "no-array-constructor": ["warn"], // (geen array constructor gebruiken, geen Array() maar [], new Array() is wel toegestaan omdat je met new Array(500) een 500 lange array maakt, net als Array.xxx() ook toegestaan is)
      "no-caller": ["warn"], // (geen caller gebruiken, is al tijden deprecated)
      "no-console": ["warn", { "allow": ["warn", "error"] }], // (geen console log of info gebruiken)
      "no-debugger": ["warn"], // (geen debugger gebruiken)
      "no-duplicate-imports": ["warn"], // (geen dubbele imports)
      "no-else-return": ["warn"], // (geen else gebruiken als je meteen kunt returnen)
      "no-empty": ["warn"], // (geen lege blokken)
      "no-eval": ["warn"], // (geen eval gebruiken)
      "no-extend-native": ["warn"], // (geen native prototypes uitbreiden)
      "no-magic-numbers": "off", // disable eslint over typescript-eslint regel
      "no-multi-spaces": ["warn"], // (geen meerdere spaties achter elkaar)
      "no-lonely-if": ["warn"], // (geen else met alleen een if erin, dan meteen else if gebruiken)
      "no-object-constructor": ["warn"], // (geen object constructor gebruiken, geen Object() maar {}, new Object() is wel toegestaan en Object.xxx() ook)
      "no-octal": ["warn"], // (geen octal literals gebruiken, var a = 0123; is niet toegestaan)
      "no-restricted-globals": [
          "warn",
          {
              "name": "event",
              "message": "Use local parameter instead."
          }
      ], // bepaalde items niet toestaan als functies
      "prefer-object-has-own": ["warn"], // (gebruik Object.hasOwn(obj, key) ipv Object.prototype.hasOwnProperty in es2022)
      "prefer-arrow-callback": ["warn", { "allowNamedFunctions": true, "allowUnboundThis": true }] // (gebruik arrow functies ipv function keyword)
    }
  },
  {
    files: [
      "src/**/constants/**/*.ts",
      "src/**/interfaces/**/*.ts",
      "src/**/types/**/*.ts",
    ],
    ignores,
    languageOptions: {
      parser: tsEslintParser,
      globals: {
        ...globals.browser
      },
      parserOptions: {
        project: [
          "tsconfig.eslint.json"
        ]
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-magic-numbers": "off",
      "@typescript-eslint/no-shadow": "off",
    },
  },
  {
    files: ["src/**/*.spec.ts", "src/test.ts", "src/**/*.mock.ts"],
    ignores,
    languageOptions: {
      parser: tsEslintParser,
      globals: {
        ...globals.jest,
        jest: true,
      },
      parserOptions: {
        project: [
          "tsconfig.spec.json"
        ]
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-magic-numbers": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/dot-notation": "off",
      "@typescript-eslint/no-shadow": "off",
      "@angular-eslint/component-class-suffix": "off",
      "@angular-eslint/component-selector": "off",
      "@angular-eslint/directive-class-suffix": "off",
      "@angular-eslint/directive-selector": "off",
      "@angular-eslint/no-output-native": "off",
      "@angular-eslint/no-output-on-prefix": "off",
      "@angular-eslint/no-lifecycle-call": "off",
      "no-restricted-globals": ["warn", {
          name: "fdescribe",
          message: "Do not commit fdescribe. Use describe instead.",
      }, {
          name: "fit",
          message: "Do not commit fdescribe. Use describe instead.",
      }],
    },
  },
  {
    files: ["e2e/**/*.ts"],
    ...playwright.configs['flat/recommended'],
    ignores,
    languageOptions: {
      parser: tsEslintParser,
      globals: {
        playwright: true,
      },
      parserOptions: {
        project: [
          "e2e/tsconfig.json"
        ]
      },
    },
    rules: {
      ...playwright.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-magic-numbers": "off",
      "no-restricted-globals": ["warn", {
          name: "fdescribe",
          message: "Do not commit fdescribe. Use describe instead.",
      }, {
          name: "fit",
          message: "Do not commit fdescribe. Use describe instead.",
      }],
    },
  },
  {
    files: ["src/**/*.html"],
    ignores,
    languageOptions: {
      parser: templateParser,
      globals: {
        ...globals.browser
      },
      parserOptions: {
        project: [
          "tsconfig.html.json"
        ],
        extraFileExtensions: ['.html'],
      },
    },
    plugins: {
      '@angular-eslint': angularEslint,
      '@angular-eslint/template': angularTemplate,
    },
    rules: {
      ...angularTemplate.configs.templateRecommended,
      ...angularTemplate.configs.templateAccessibility,
      "@angular-eslint/template/attributes-order": ["warn", {
          alphabetical: true,
      }],

      "@angular-eslint/template/button-has-type": ["warn"],
      "@angular-eslint/template/click-events-have-key-events": "off",
      "@angular-eslint/template/interactive-supports-focus": "off",
      "@angular-eslint/template/no-duplicate-attributes": ["warn"],

      "@angular-eslint/template/no-inline-styles": ["warn", {
          allowNgStyle: true,
          allowBindToStyle: true,
      }],

      "@angular-eslint/template/no-interpolation-in-attributes": ["warn"],
      "@angular-eslint/template/prefer-control-flow": ["warn"],
      "@angular-eslint/template/prefer-self-closing-tags": ["warn"],
    }
  },
];

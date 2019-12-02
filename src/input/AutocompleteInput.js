
var __assign = (this && this.__assign) || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (const p in s) { if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]; }
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
const __rest = (this && this.__rest) || function (s, e) {
  const t = {};
  for (var p in s) { if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p]; }
  if (s != null && typeof Object.getOwnPropertySymbols === 'function') {
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
  }
  return t;
};
const __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod;
  const result = {};
  if (mod != null) for (const k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
};
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = __importStar(require('react'));
const downshift_1 = __importDefault(require('downshift'));
const classnames_1 = __importDefault(require('classnames'));
const get_1 = __importDefault(require('lodash/get'));
const core_1 = require('@material-ui/core');
const ra_core_1 = require('ra-core');
const InputHelperText_1 = __importDefault(require('./InputHelperText'));
const AutocompleteSuggestionList_1 = __importDefault(require('./AutocompleteSuggestionList'));
const AutocompleteSuggestionItem_1 = __importDefault(require('./AutocompleteSuggestionItem'));
/**
 * An Input component for an autocomplete field, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property an the option text
 * @example
 * const choices = [
 *    { id: 'M', name: 'Male' },
 *    { id: 'F', name: 'Female' },
 * ];
 * <AutocompleteInput source="gender" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <AutocompleteInput source="author_id" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <AutocompleteInput source="author_id" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that will be cloned and receive
 * the related choice as the `record` prop. You can use Field components there.
 * Note that you must also specify the `matchSuggestion` prop
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const matchSuggestion = (filterValue, choice) => choice.first_name.match(filterValue) || choice.last_name.match(filterValue);
 * const FullNameField = ({ record }) => <span>{record.first_name} {record.last_name}</span>;
 * <SelectInput source="gender" choices={choices} optionText={<FullNameField />} matchSuggestion={matchSuggestion} />
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'M', name: 'myroot.gender.male' },
 *    { id: 'F', name: 'myroot.gender.female' },
 * ];
 *
 * However, in some cases (e.g. inside a `<ReferenceInput>`), you may not want
 * the choice to be translated. In that case, set the `translateChoice` prop to false.
 * @example
 * <AutocompleteInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the material-ui <AutoComplete> component
 *
 * @example
 * <AutocompleteInput source="author_id" options={{ fullWidthInput: true }} />
 */
const AutocompleteInput = function (_a) {
  const { allowEmpty } = _a;
  const classesOverride = _a.classes;
  const _b = _a.choices;
  const choices = _b === void 0 ? [] : _b;
  const { emptyText } = _a;
  const { emptyValue } = _a;
  const { format } = _a;
  const { helperText } = _a;
  const idOverride = _a.id;
  const inputOverride = _a.input;
  const isRequiredOverride = _a.isRequired;
  const { label } = _a;
  const { limitChoicesToValue } = _a;
  const _c = _a.margin;
  const margin = _c === void 0 ? 'dense' : _c;
  const { matchSuggestion } = _a;
  const metaOverride = _a.meta;
  const { onBlur } = _a;
  const { onChange } = _a;
  const { onFocus } = _a;
  const _d = _a.options;
  const _e = _d === void 0 ? {} : _d;
  const { suggestionsContainerProps } = _e;
  const { labelProps } = _e;
  const { InputProps } = _e;
  const options = __rest(_e, ['suggestionsContainerProps', 'labelProps', 'InputProps']);
  const _f = _a.optionText;
  const optionText = _f === void 0 ? 'name' : _f;
  const _g = _a.optionValue;
  const optionValue = _g === void 0 ? 'id' : _g;
  const { parse } = _a;
  const { resource } = _a;
  const { setFilter } = _a;
  const shouldRenderSuggestionsOverride = _a.shouldRenderSuggestions;
  const { source } = _a;
  const { suggestionLimit } = _a;
  const _h = _a.translateChoice;
  const translateChoice = _h === void 0 ? true : _h;
  const { validate } = _a;
  const _j = _a.variant;
  const variant = _j === void 0 ? 'filled' : _j;
  const rest = __rest(_a, ['allowEmpty', 'classes', 'choices', 'emptyText', 'emptyValue', 'format', 'helperText', 'id', 'input', 'isRequired', 'label', 'limitChoicesToValue', 'margin', 'matchSuggestion', 'meta', 'onBlur', 'onChange', 'onFocus', 'options', 'optionText', 'optionValue', 'parse', 'resource', 'setFilter', 'shouldRenderSuggestions', 'source', 'suggestionLimit', 'translateChoice', 'validate', 'variant']);
  ra_core_1.warning(react_1.isValidElement(optionText) && !matchSuggestion, 'If the optionText prop is a React element, you must also specify the matchSuggestion prop:\n<AutocompleteInput\n    matchSuggestion={(filterValue, suggestion) => true}\n/>\n        ');
  const classes = useStyles({ classes: classesOverride });
  const inputEl = react_1.useRef();
  const anchorEl = react_1.useRef();
  const _k = ra_core_1.useInput({
    format,
    id: idOverride,
    input: inputOverride,
    meta: metaOverride,
    onBlur,
    onChange,
    onFocus,
    parse,
    resource,
    source,
    validate,
    ...rest,
  }); const { id } = _k; const { input } = _k; const { isRequired } = _k; const _l = _k.meta; const { touched } = _l; const
    { error } = _l;
  const _m = react_1.useState(''); const filterValue = _m[0]; const
    setFilterValue = _m[1];
  const getSuggestionFromValue = react_1.useCallback(value => choices.find(choice => get_1.default(choice, optionValue) === value), [choices, optionValue]);
  const selectedItem = react_1.useMemo(() => getSuggestionFromValue(input.value) || null, [input.value, getSuggestionFromValue]);
  const _o = ra_core_1.useSuggestions({
    allowEmpty,
    choices,
    emptyText,
    emptyValue,
    limitChoicesToValue,
    matchSuggestion,
    optionText,
    optionValue,
    selectedItem,
    suggestionLimit,
    translateChoice,
  }); const { getChoiceText } = _o; const { getChoiceValue } = _o; const
    { getSuggestions } = _o;
  const handleFilterChange = react_1.useCallback(eventOrValue => {
    const event = eventOrValue;
    const value = event.target
      ? event.target.value
      : eventOrValue;
    if (setFilter) {
      setFilter(value);
    }
  }, [setFilter]);
    // We must reset the filter every time the value changes to ensure we
    // display at least some choices even if the input has a value.
    // Otherwise, it would only display the currently selected one and the user
    // would have to first clear the input before seeing any other choices
  react_1.useEffect(() => {
    handleFilterChange('');
    // If we have a value, set the filter to its text so that
    // Downshift displays it correctly
    setFilterValue(input.value ? getChoiceText(selectedItem) : '');
  }, [input.value, handleFilterChange, selectedItem, getChoiceText]);
  const handleChange = react_1.useCallback(item => {
    input.onChange(getChoiceValue(item));
  }, [getChoiceValue, input]);
    // This function ensures that the suggestion list stay aligned to the
    // input element even if it moves (because user scrolled for example)
  const updateAnchorEl = function () {
    if (!inputEl.current) {
      return;
    }
    const inputPosition = inputEl.current.getBoundingClientRect();
    // It works by implementing a mock element providing the only method used
    // by the PopOver component, getBoundingClientRect, which will return a
    // position based on the input position
    if (!anchorEl.current) {
      anchorEl.current = { getBoundingClientRect() { return inputPosition; } };
    } else {
      const anchorPosition = anchorEl.current.getBoundingClientRect();
      if (anchorPosition.x !== inputPosition.x
                || anchorPosition.y !== inputPosition.y) {
        anchorEl.current = {
          getBoundingClientRect() { return inputPosition; },
        };
      }
    }
  };
  const storeInputRef = function (input) {
    inputEl.current = input;
    updateAnchorEl();
  };
  const handleBlur = react_1.useCallback(event => {
    handleFilterChange('');
    // If we had a value before, set the filter back to its text so that
    // Downshift displays it correctly
    setFilterValue(input.value ? getChoiceText(selectedItem) : '');
    input.onBlur(event);
  }, [getChoiceText, handleFilterChange, input, selectedItem]);
  const handleFocus = react_1.useCallback(openMenu => function (event) {
    openMenu(event);
    input.onFocus(event);
  }, [input]);
  const shouldRenderSuggestions = function (val) {
    if (shouldRenderSuggestionsOverride !== undefined
            && typeof shouldRenderSuggestionsOverride === 'function') {
      return shouldRenderSuggestionsOverride(val);
    }
    return true;
  };
  return (react_1.default.createElement(downshift_1.default, {
    inputValue: filterValue, onChange: handleChange, selectedItem, itemToString(item) { return getChoiceValue(item); }, ...rest,
  }, _a => {
    let _b;
    const { getInputProps } = _a;
    const { getItemProps } = _a;
    const { getLabelProps } = _a;
    const { getMenuProps } = _a;
    const { isOpen } = _a;
    const { inputValue } = _a;
    const { highlightedIndex } = _a;
    const { openMenu } = _a;
    const isMenuOpen = isOpen && shouldRenderSuggestions(filterValue);
    const _c = getInputProps({
      onBlur: handleBlur,
      onFocus: handleFocus(openMenu),
    }); const downshiftId = _c.id; // We want to ignore this to correctly link our label and the input
    const { value } = _c; const { onBlur } = _c; const { onChange } = _c; const { onFocus } = _c; const { ref } = _c; const
      inputProps = __rest(_c, ['id', 'value', 'onBlur', 'onChange', 'onFocus', 'ref']);
    const suggestions = getSuggestions(filterValue);
    return (react_1.default.createElement('div', { className: classes.container },
      react_1.default.createElement(core_1.TextField, {
        id,
        name: input.name,
        InputProps: {
          inputRef: storeInputRef,
          classes: {
            root: classnames_1.default(classes.inputRoot, (_b = {},
            _b[classes.inputRootFilled] = variant === 'filled',
            _b)),
            input: classes.inputInput,
          },
          onBlur,
          onChange(event) {
            handleFilterChange(event);
            setFilterValue(event.target.value);
            onChange(event);
          },
          onFocus,
        },
        error: !!(touched && error),
        label: react_1.default.createElement(ra_core_1.FieldTitle, {
          label,
          ...labelProps,
          source,
          resource,
          isRequired: typeof isRequiredOverride
                        !== 'undefined'
            ? isRequiredOverride
            : isRequired,
        }),
        InputLabelProps: getLabelProps({
          htmlFor: id,
        }),
        helperText: (touched && error) || helperText ? (react_1.default.createElement(InputHelperText_1.default, { touched, error, helperText })) : null,
        variant,
        margin,
        value: filterValue,
        ...inputProps,
        ...options,
      }),
      react_1.default.createElement(AutocompleteSuggestionList_1.default, {
        isOpen: isMenuOpen,
        menuProps: getMenuProps({},
        // https://github.com/downshift-js/downshift/issues/235
          { suppressRefError: true }),
        inputEl: inputEl.current,
        suggestionsContainerProps,
      }, suggestions.map((suggestion, index) => (react_1.default.createElement(AutocompleteSuggestionItem_1.default, {
        key: getChoiceValue(suggestion),
        suggestion,
        index,
        highlightedIndex,
        isSelected: input.value
                    === getChoiceValue(suggestion),
        filterValue,
        getSuggestionText: getChoiceText,
        ...getItemProps({
          item: suggestion,
        }),
      }))))));
  }));
};
var useStyles = core_1.makeStyles(theme => {
  const chipBackgroundColor = theme.palette.type === 'light'
    ? 'rgba(0, 0, 0, 0.09)'
    : 'rgba(255, 255, 255, 0.09)';
  return {
    root: {
      flexGrow: 1,
      height: 250,
    },
    container: {
      flexGrow: 1,
      position: 'relative',
    },
    paper: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing(1),
      left: 0,
      right: 0,
    },
    chip: {
      margin: theme.spacing(0.5, 0.5, 0.5, 0),
    },
    chipContainerFilled: {
      margin: '27px 12px 10px 0',
    },
    inputRoot: {
      flexWrap: 'wrap',
    },
    inputRootFilled: {
      flexWrap: 'wrap',
      '& $chip': {
        backgroundColor: chipBackgroundColor,
      },
    },
    inputInput: {
      width: 'auto',
      flexGrow: 1,
    },
    divider: {
      height: theme.spacing(2),
    },
  };
});
exports.default = AutocompleteInput;

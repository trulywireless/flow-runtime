/* @flow */

export const input = `
  const demo = (input?: string): ? string => input;
`;

export const expected = `
  import t from "flow-runtime";
  const demo = (input?) => {
    let _inputType = t.string();
    const _returnType = t.return(t.nullable(t.string()));
    t.param("input", _inputType, true).assert(input);
    return _returnType.assert(input);
  };

`;
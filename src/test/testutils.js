/**
 * Util Function to return component
 * based on data-test attribute
 */

export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

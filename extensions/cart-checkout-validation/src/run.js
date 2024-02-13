// @ts-check

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 */

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */
export function run(input) {
  // console.log("checkinbg the logs")
  // console.log(input.cart, "lines item")
  // const errors = input.cart.lines
  //   .filter(({ quantity }) => quantity > 2)
  //   .map(() => ({
  //     localizedMessage: "Not possible to order more than one of each, this is test",
  //     target: "cart",
  //   }));
  const error = {
    localizedMessage: "Not possible to order more than 7 items. Please contact support@mymuse.in for bulk orderas",
    target: "cart",
  }

  const errors = []

  let totalQty = 0

  const lineItems = input.cart.lines
                    .map(obj => (
                      totalQty += obj.quantity
                    ))


  if (totalQty > 7) {
    errors.push(error)
  }
    
  return {
    errors
  }
};
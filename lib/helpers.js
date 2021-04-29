/**
 * 
 * @param {String|Promise<String>|Function<String>} val needs to return string
 * @returns {Promise<String>} val Always Promise<string>
 */
const stringOrPromiseOrFunction = async val => {
    const is = await val;
    const strPromiseFn = (typeof is === 'function') ? await is() : is;
    if (typeof strPromiseFn !== 'string') {
      throw new Error('stringOrPromiseOrFunction needs to return string')
    }
    return strPromiseFn
}
export { stringOrPromiseOrFunction }

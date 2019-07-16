/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
export const unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/


/**
 * Define a property.
 */
export function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    })
}

/**
 * Parse simple path.
 */
const bailRE = new RegExp(`[^${unicodeRegExp.source}.$_\\d]`)
export function parsePath(path) {
    if (bailRE.test(path)) {
        return
    }
    const segments = path.split('.')
    return function (obj) {
        for (let i = 0; i < segments.length; i++) {
            if (!obj) return
            obj = obj[segments[i]]
        }
        return obj
    }
}


export function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}

export function isFn(val){
    return typeof val === 'function'
}

export function hasOwn(obj, key) {
    return obj.hasOwnProperty(key)
}

export function hasProto(obj) {
    return !!(obj && obj.__proto__);
}

export function isPlainObject(value) {
    if (Object.getPrototypeOf(value) === null) {
        return true
    }
    let proto = value
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto)
    }
    return Object.getPrototypeOf(value) === proto
}


export const emptyObject = Object.freeze({})

export function isUndef (v) {
  return v === undefined || v === null
}

export function isDef (v){
  return v !== undefined && v !== null
}

export function isTrue (v){
  return v === true
}

export function isFalse (v){
  return v === false
}
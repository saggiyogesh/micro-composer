module.exports = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

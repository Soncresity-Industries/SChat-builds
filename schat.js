"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function")
      for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
        key = keys[i];
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: ((k) => from[k]).bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // shims/asyncIteratorSymbol.js
  var asyncIteratorSymbol;
  var init_asyncIteratorSymbol = __esm({
    "shims/asyncIteratorSymbol.js"() {
      "use strict";
      asyncIteratorSymbol = Symbol("Symbol.asyncIterator");
    }
  });

  // shims/promiseAllSettled.js
  var allSettledFulfill, allSettledReject, mapAllSettled, allSettled;
  var init_promiseAllSettled = __esm({
    "shims/promiseAllSettled.js"() {
      "use strict";
      allSettledFulfill = (value) => ({
        status: "fulfilled",
        value
      });
      allSettledReject = (reason) => ({
        status: "rejected",
        reason
      });
      mapAllSettled = (item) => Promise.resolve(item).then(allSettledFulfill, allSettledReject);
      allSettled = Promise.allSettled ??= (iterator) => {
        return Promise.all(Array.from(iterator).map(mapAllSettled));
      };
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_async_to_generator.js
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done)
      resolve(value);
    else
      Promise.resolve(value).then(_next, _throw);
  }
  function _async_to_generator(fn) {
    return function() {
      var self = this, args = arguments;
      return new Promise(function(resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(void 0);
      });
    };
  }
  var init_async_to_generator = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_async_to_generator.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/spitroast@1.4.4/node_modules/spitroast/dist/cjs.js
  var require_cjs = __commonJS({
    "node_modules/.pnpm/spitroast@1.4.4/node_modules/spitroast/dist/cjs.js"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export2 = (target, all) => {
        for (var name in all)
          __defProp2(target, name, {
            get: all[name],
            enumerable: true
          });
      };
      var __copyProps2 = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          var _loop2 = function(key2) {
            if (!__hasOwnProp2.call(to, key2) && key2 !== except)
              __defProp2(to, key2, {
                get: () => from[key2],
                enumerable: !(desc = __getOwnPropDesc2(from, key2)) || desc.enumerable
              });
          };
          for (var key of __getOwnPropNames2(from))
            _loop2(key);
        }
        return to;
      };
      var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", {
        value: true
      }), mod);
      var src_exports2 = {};
      __export2(src_exports2, {
        after: () => after2,
        before: () => before3,
        instead: () => instead4,
        unpatchAll: () => unpatchAll
      });
      module.exports = __toCommonJS2(src_exports2);
      var patchTypes = [
        "a",
        "b",
        "i"
      ];
      var patchedObjects = /* @__PURE__ */ new Map();
      function hook_default(funcName, funcParent, funcArgs, ctxt, isConstruct) {
        var patch = patchedObjects.get(funcParent)?.[funcName];
        if (!patch)
          return isConstruct ? Reflect.construct(funcParent[funcName], funcArgs, ctxt) : funcParent[funcName].apply(ctxt, funcArgs);
        for (var hook of patch.b.values()) {
          var maybefuncArgs = hook.call(ctxt, funcArgs);
          if (Array.isArray(maybefuncArgs))
            funcArgs = maybefuncArgs;
        }
        var workingRetVal = [
          ...patch.i.values()
        ].reduce(
          (prev, current) => (...args) => current.call(ctxt, args, prev),
          // This calls the original function
          (...args) => isConstruct ? Reflect.construct(patch.o, args, ctxt) : patch.o.apply(ctxt, args)
        )(...funcArgs);
        for (var hook1 of patch.a.values())
          workingRetVal = hook1.call(ctxt, funcArgs, workingRetVal) ?? workingRetVal;
        return workingRetVal;
      }
      function unpatch(funcParent, funcName, hookId, type) {
        var patchedObject = patchedObjects.get(funcParent);
        var patch = patchedObject?.[funcName];
        if (!patch?.[type].has(hookId))
          return false;
        patch[type].delete(hookId);
        if (patchTypes.every((t) => patch[t].size === 0)) {
          var success = Reflect.defineProperty(funcParent, funcName, {
            value: patch.o,
            writable: true,
            configurable: true
          });
          if (!success)
            funcParent[funcName] = patch.o;
          delete patchedObject[funcName];
        }
        if (Object.keys(patchedObject).length == 0)
          patchedObjects.delete(funcParent);
        return true;
      }
      function unpatchAll() {
        for (var [parentObject, patchedObject] of patchedObjects.entries())
          for (var funcName in patchedObject)
            for (var hookType of patchTypes)
              for (var hookId of patchedObject[funcName]?.[hookType].keys() ?? [])
                unpatch(parentObject, funcName, hookId, hookType);
      }
      var getPatchFunc_default = (patchType) => (funcName, funcParent, callback, oneTime = false) => {
        if (typeof funcParent[funcName] !== "function")
          throw new Error(`${funcName} is not a function in ${funcParent.constructor.name}`);
        if (!patchedObjects.has(funcParent))
          patchedObjects.set(funcParent, /* @__PURE__ */ Object.create(null));
        var parentInjections = patchedObjects.get(funcParent);
        if (!parentInjections[funcName]) {
          var origFunc = funcParent[funcName];
          parentInjections[funcName] = {
            o: origFunc,
            b: /* @__PURE__ */ new Map(),
            i: /* @__PURE__ */ new Map(),
            a: /* @__PURE__ */ new Map()
          };
          var runHook = (ctxt, args, construct) => {
            var ret = hook_default(funcName, funcParent, args, ctxt, construct);
            if (oneTime)
              unpatchThisPatch();
            return ret;
          };
          var replaceProxy = new Proxy(origFunc, {
            apply: (_2, ctxt, args) => runHook(ctxt, args, false),
            construct: (_2, args) => runHook(origFunc, args, true),
            get: (target, prop, receiver) => prop == "toString" ? origFunc.toString.bind(origFunc) : Reflect.get(target, prop, receiver)
          });
          var success = Reflect.defineProperty(funcParent, funcName, {
            value: replaceProxy,
            configurable: true,
            writable: true
          });
          if (!success)
            funcParent[funcName] = replaceProxy;
        }
        var hookId = Symbol();
        var unpatchThisPatch = () => unpatch(funcParent, funcName, hookId, patchType);
        parentInjections[funcName][patchType].set(hookId, callback);
        return unpatchThisPatch;
      };
      var before3 = getPatchFunc_default("b");
      var instead4 = getPatchFunc_default("i");
      var after2 = getPatchFunc_default("a");
    }
  });

  // src/lib/api/native/modules/index.ts
  var modules_exports = {};
  __export(modules_exports, {
    BundleUpdaterManager: () => BundleUpdaterManager,
    NativeCacheModule: () => NativeCacheModule,
    NativeClientInfoModule: () => NativeClientInfoModule,
    NativeDeviceModule: () => NativeDeviceModule,
    NativeFileModule: () => NativeFileModule,
    NativeThemeModule: () => NativeThemeModule
  });
  var nmp, NativeCacheModule, NativeFileModule, NativeClientInfoModule, NativeDeviceModule, NativeThemeModule, BundleUpdaterManager;
  var init_modules = __esm({
    "src/lib/api/native/modules/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      nmp = window.nativeModuleProxy;
      NativeCacheModule = nmp.NativeCacheModule ?? nmp.MMKVManager;
      NativeFileModule = nmp.NativeFileModule ?? nmp.RTNFileManager ?? nmp.DCDFileManager;
      NativeClientInfoModule = nmp.NativeClientInfoModule ?? nmp.RTNClientInfoManager ?? nmp.InfoDictionaryManager;
      NativeDeviceModule = nmp.NativeDeviceModule ?? nmp.RTNDeviceManager ?? nmp.DCDDeviceManager;
      NativeThemeModule = nmp.NativeThemeModule ?? nmp.RTNThemeManager ?? nmp.DCDTheme;
      ({ BundleUpdaterManager } = nmp);
    }
  });

  // src/lib/api/native/fs.ts
  var fs_exports = {};
  __export(fs_exports, {
    clearFolder: () => clearFolder,
    downloadFile: () => downloadFile,
    fileExists: () => fileExists,
    readFile: () => readFile,
    removeFile: () => removeFile,
    writeFile: () => writeFile
  });
  function clearFolder(path) {
    return _clearFolder.apply(this, arguments);
  }
  function _clearFolder() {
    _clearFolder = _async_to_generator(function* (path, { prefix = "schat/" } = {}) {
      if (typeof NativeFileModule.clearFolder !== "function")
        throw new Error("'fs.clearFolder' is not supported");
      return void (yield NativeFileModule.clearFolder("documents", `${prefix}${path}`));
    });
    return _clearFolder.apply(this, arguments);
  }
  function removeFile(path) {
    return _removeFile.apply(this, arguments);
  }
  function _removeFile() {
    _removeFile = _async_to_generator(function* (path, { prefix = "schat/" } = {}) {
      if (typeof NativeFileModule.removeFile !== "function")
        throw new Error("'fs.removeFile' is not supported");
      return void (yield NativeFileModule.removeFile("documents", `${prefix}${path}`));
    });
    return _removeFile.apply(this, arguments);
  }
  function fileExists(path) {
    return _fileExists.apply(this, arguments);
  }
  function _fileExists() {
    _fileExists = _async_to_generator(function* (path, { prefix = "schat/" } = {}) {
      return yield NativeFileModule.fileExists(`${NativeFileModule.getConstants().DocumentsDirPath}/${prefix}${path}`);
    });
    return _fileExists.apply(this, arguments);
  }
  function writeFile(path, data) {
    return _writeFile.apply(this, arguments);
  }
  function _writeFile() {
    _writeFile = _async_to_generator(function* (path, data, { prefix = "schat/" } = {}) {
      if (typeof data !== "string")
        throw new Error("Argument 'data' must be a string");
      return void (yield NativeFileModule.writeFile("documents", `${prefix}${path}`, data, "utf8"));
    });
    return _writeFile.apply(this, arguments);
  }
  function readFile(path) {
    return _readFile.apply(this, arguments);
  }
  function _readFile() {
    _readFile = _async_to_generator(function* (path, { prefix = "schat/" } = {}) {
      try {
        return yield NativeFileModule.readFile(`${NativeFileModule.getConstants().DocumentsDirPath}/${prefix}${path}`, "utf8");
      } catch (err) {
        throw new Error(`An error occured while writing to '${path}'`, {
          cause: err
        });
      }
    });
    return _readFile.apply(this, arguments);
  }
  function downloadFile(url2, path) {
    return _downloadFile.apply(this, arguments);
  }
  function _downloadFile() {
    _downloadFile = _async_to_generator(function* (url2, path, { prefix = "schat/" } = {}) {
      var response = yield fetch(url2);
      if (!response.ok) {
        throw new Error(`Failed to download file from ${url2}: ${response.statusText}`);
      }
      var arrayBuffer = yield response.arrayBuffer();
      var data = Buffer.from(arrayBuffer).toString("base64");
      yield NativeFileModule.writeFile("documents", `${prefix}${path}`, data, "base64");
    });
    return _downloadFile.apply(this, arguments);
  }
  var init_fs = __esm({
    "src/lib/api/native/fs.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_modules();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_get_prototype_of.js
  function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o2) {
      return o2.__proto__ || Object.getPrototypeOf(o2);
    };
    return _get_prototype_of(o);
  }
  var init_get_prototype_of = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_get_prototype_of.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_is_native_reflect_construct.js
  function _is_native_reflect_construct() {
    try {
      var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (_2) {
    }
    return (_is_native_reflect_construct = function _is_native_reflect_construct2() {
      return !!result;
    })();
  }
  var init_is_native_reflect_construct = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_is_native_reflect_construct.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_assert_this_initialized.js
  function _assert_this_initialized(self) {
    if (self === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
  }
  var init_assert_this_initialized = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_assert_this_initialized.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_type_of.js
  function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
  }
  var init_type_of = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_type_of.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_possible_constructor_return.js
  function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function"))
      return call;
    return _assert_this_initialized(self);
  }
  var init_possible_constructor_return = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_possible_constructor_return.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_assert_this_initialized();
      init_type_of();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_call_super.js
  function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
  }
  var init_call_super = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_call_super.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_get_prototype_of();
      init_is_native_reflect_construct();
      init_possible_constructor_return();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_call_check.js
  function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor))
      throw new TypeError("Cannot call a class as a function");
  }
  var init_class_call_check = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_class_call_check.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_set_prototype_of.js
  function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
    return _set_prototype_of(o, p);
  }
  var init_set_prototype_of = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_set_prototype_of.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_inherits.js
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass)
      _set_prototype_of(subClass, superClass);
  }
  var init_inherits = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_inherits.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_set_prototype_of();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_construct.js
  function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct())
      _construct = Reflect.construct;
    else {
      _construct = function construct(Parent2, args2, Class2) {
        var a = [
          null
        ];
        a.push.apply(a, args2);
        var Constructor = Function.bind.apply(Parent2, a);
        var instance = new Constructor();
        if (Class2)
          _set_prototype_of(instance, Class2.prototype);
        return instance;
      };
    }
    return _construct.apply(null, arguments);
  }
  var init_construct = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_construct.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_is_native_reflect_construct();
      init_set_prototype_of();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_is_native_function.js
  function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  var init_is_native_function = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_is_native_function.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_wrap_native_super.js
  function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
    _wrap_native_super = function _wrap_native_super2(Class2) {
      if (Class2 === null || !_is_native_function(Class2))
        return Class2;
      if (typeof Class2 !== "function")
        throw new TypeError("Super expression must either be null or a function");
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class2))
          return _cache.get(Class2);
        _cache.set(Class2, Wrapper);
      }
      function Wrapper() {
        return _construct(Class2, arguments, _get_prototype_of(this).constructor);
      }
      Wrapper.prototype = Object.create(Class2.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _set_prototype_of(Wrapper, Class2);
    };
    return _wrap_native_super(Class);
  }
  var init_wrap_native_super = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_wrap_native_super.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_construct();
      init_get_prototype_of();
      init_is_native_function();
      init_set_prototype_of();
    }
  });

  // node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/function/debounce.mjs
  function debounce(func, debounceMs, { signal, edges } = {}) {
    var pendingThis = void 0;
    var pendingArgs = null;
    var leading = edges != null && edges.includes("leading");
    var trailing = edges == null || edges.includes("trailing");
    var invoke = () => {
      if (pendingArgs !== null) {
        func.apply(pendingThis, pendingArgs);
        pendingThis = void 0;
        pendingArgs = null;
      }
    };
    var onTimerEnd = () => {
      if (trailing) {
        invoke();
      }
      cancel();
    };
    var timeoutId = null;
    var schedule = () => {
      if (timeoutId != null) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        timeoutId = null;
        onTimerEnd();
      }, debounceMs);
    };
    var cancelTimer = () => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    };
    var cancel = () => {
      cancelTimer();
      pendingThis = void 0;
      pendingArgs = null;
    };
    var flush = () => {
      cancelTimer();
      invoke();
    };
    var debounced = function debounced2(...args) {
      if (signal?.aborted) {
        return;
      }
      pendingThis = this;
      pendingArgs = args;
      var isFirstCall = timeoutId == null;
      schedule();
      if (leading && isFirstCall) {
        invoke();
      }
    };
    debounced.schedule = schedule;
    debounced.cancel = cancel;
    debounced.flush = flush;
    signal?.addEventListener("abort", cancel, {
      once: true
    });
    return debounced;
  }
  var init_debounce = __esm({
    "node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/function/debounce.mjs"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/object/omit.mjs
  function omit(obj, keys) {
    var result = {
      ...obj
    };
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      delete result[key];
    }
    return result;
  }
  var init_omit = __esm({
    "node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/object/omit.mjs"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/predicate/isNotNil.mjs
  function isNotNil(x2) {
    return x2 != null;
  }
  var init_isNotNil = __esm({
    "node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/predicate/isNotNil.mjs"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/index.mjs
  var init_dist = __esm({
    "node_modules/.pnpm/es-toolkit@1.21.0/node_modules/es-toolkit/dist/index.mjs"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_debounce();
      init_omit();
      init_isNotNil();
    }
  });

  // src/metro/internals/enums.ts
  var ModuleFlags, ModulesMapInternal;
  var init_enums = __esm({
    "src/metro/internals/enums.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      (function(ModuleFlags2) {
        ModuleFlags2[ModuleFlags2["EXISTS"] = 1] = "EXISTS";
        ModuleFlags2[ModuleFlags2["BLACKLISTED"] = 2] = "BLACKLISTED";
        ModuleFlags2[ModuleFlags2["ASSET"] = 4] = "ASSET";
      })(ModuleFlags || (ModuleFlags = {}));
      (function(ModulesMapInternal2) {
        ModulesMapInternal2[ModulesMapInternal2["FULL_LOOKUP"] = 0] = "FULL_LOOKUP";
        ModulesMapInternal2[ModulesMapInternal2["NOT_FOUND"] = 1] = "NOT_FOUND";
      })(ModulesMapInternal || (ModulesMapInternal = {}));
    }
  });

  // src/lib/api/patcher.ts
  var patcher_exports = {};
  __export(patcher_exports, {
    _patcherDelaySymbol: () => _patcherDelaySymbol,
    after: () => after,
    before: () => before,
    default: () => patcher_default,
    instead: () => instead
  });
  function create(fn) {
    function patchFn(...args) {
      if (_patcherDelaySymbol in args[1]) {
        var delayCallback = args[1][_patcherDelaySymbol];
        var cancel = false;
        var unpatch = () => cancel = true;
        delayCallback((target) => {
          if (cancel)
            return;
          args[1] = target;
          unpatch = fn.apply(this, args);
        });
        return () => unpatch();
      }
      return fn.apply(this, args);
    }
    function promisePatchFn(...args) {
      var thenable = args[1];
      if (!thenable || !("then" in thenable))
        throw new Error("target is not a then-able object");
      var cancel = false;
      var unpatch = () => cancel = true;
      thenable.then((target) => {
        if (cancel)
          return;
        args[1] = target;
        unpatch = patchFn.apply(this, args);
      });
      return () => unpatch();
    }
    return Object.assign(patchFn, {
      await: promisePatchFn
    });
  }
  var _after, _before, _instead, _patcherDelaySymbol, after, before, instead, patcher_default;
  var init_patcher = __esm({
    "src/lib/api/patcher.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      ({ after: _after, before: _before, instead: _instead } = require_cjs());
      _patcherDelaySymbol = Symbol.for("schat.api.patcher.delay");
      after = create(_after);
      before = create(_before);
      instead = create(_instead);
      patcher_default = {
        after,
        before,
        instead
      };
    }
  });

  // src/lib/api/assets/patches.ts
  var patches_exports = {};
  __export(patches_exports, {
    assetsModule: () => assetsModule,
    patchAssets: () => patchAssets
  });
  function patchAssets(module) {
    if (assetsModule)
      return;
    assetsModule = module;
    var unpatch = after("registerAsset", assetsModule, () => {
      var moduleId = getImportingModuleId();
      if (moduleId !== -1)
        indexAssetModuleFlag(moduleId);
    });
    return unpatch;
  }
  var assetsModule;
  var init_patches = __esm({
    "src/lib/api/assets/patches.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_patcher();
      init_caches();
      init_modules2();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_create_class.js
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var init_create_class = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_create_class.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_define_property.js
  function _define_property(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else
      obj[key] = value;
    return obj;
  }
  var init_define_property = __esm({
    "node_modules/.pnpm/@swc+helpers@0.5.13/node_modules/@swc/helpers/esm/_define_property.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/core/vendetta/Emitter.ts
  var Events, Emitter;
  var init_Emitter = __esm({
    "src/core/vendetta/Emitter.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_class_call_check();
      init_create_class();
      init_define_property();
      (function(Events2) {
        Events2["GET"] = "GET";
        Events2["SET"] = "SET";
        Events2["DEL"] = "DEL";
      })(Events || (Events = {}));
      Emitter = /* @__PURE__ */ function() {
        "use strict";
        function Emitter2() {
          _class_call_check(this, Emitter2);
          _define_property(this, "listeners", Object.values(Events).reduce((acc, val) => (acc[val] = /* @__PURE__ */ new Set(), acc), {}));
        }
        _create_class(Emitter2, [
          {
            key: "on",
            value: function on(event, listener) {
              if (!this.listeners[event].has(listener))
                this.listeners[event].add(listener);
            }
          },
          {
            key: "off",
            value: function off(event, listener) {
              this.listeners[event].delete(listener);
            }
          },
          {
            key: "once",
            value: function once(event, listener) {
              var once2 = (event2, data) => {
                this.off(event2, once2);
                listener(event2, data);
              };
              this.on(event, once2);
            }
          },
          {
            key: "emit",
            value: function emit(event, data) {
              for (var listener of this.listeners[event])
                listener(event, data);
            }
          }
        ]);
        return Emitter2;
      }();
    }
  });

  // src/metro/factories.ts
  var factories_exports = {};
  __export(factories_exports, {
    createFilterDefinition: () => createFilterDefinition,
    createSimpleFilter: () => createSimpleFilter
  });
  function createFilterDefinition(fn, uniqMaker) {
    function createHolder(func, args, raw) {
      return Object.assign(func, {
        filter: fn,
        raw,
        uniq: [
          raw && "raw::",
          uniqMaker(args)
        ].filter(Boolean).join("")
      });
    }
    var curry = (raw) => (...args) => {
      return createHolder((m2, id, defaultCheck) => {
        return fn(args, m2, id, defaultCheck);
      }, args, raw);
    };
    return Object.assign(curry(false), {
      byRaw: curry(true),
      uniqMaker
    });
  }
  function createSimpleFilter(filter, uniq) {
    return createFilterDefinition((_2, m2) => filter(m2), () => `dynamic::${uniq}`)();
  }
  var init_factories = __esm({
    "src/metro/factories.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/metro/filters.ts
  var filters_exports = {};
  __export(filters_exports, {
    byDisplayName: () => byDisplayName,
    byFilePath: () => byFilePath,
    byMutableProp: () => byMutableProp,
    byName: () => byName,
    byProps: () => byProps,
    byStoreName: () => byStoreName,
    byTypeName: () => byTypeName
  });
  var byProps, byName, byDisplayName, byTypeName, byStoreName, byFilePath, byMutableProp;
  var init_filters = __esm({
    "src/metro/filters.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_factories();
      init_modules2();
      byProps = createFilterDefinition((props, m2) => props.length === 0 ? m2[props[0]] : props.every((p) => m2[p]), (props) => `schat.metro.byProps(${props.join(",")})`);
      byName = createFilterDefinition(([name], m2) => m2.name === name, (name) => `schat.metro.byName(${name})`);
      byDisplayName = createFilterDefinition(([displayName], m2) => m2.displayName === displayName, (name) => `schat.metro.byDisplayName(${name})`);
      byTypeName = createFilterDefinition(([typeName], m2) => m2.type?.name === typeName, (name) => `schat.metro.byTypeName(${name})`);
      byStoreName = createFilterDefinition(([name], m2) => m2.getName?.length === 0 && m2.getName() === name, (name) => `schat.metro.byStoreName(${name})`);
      byFilePath = createFilterDefinition(
        // module return depends on defaultCheck. if true, it'll return module.default, otherwise the whole module
        // unlike filters like byName, defaultCheck doesn't affect the return since we don't rely on exports, but only its ID
        // one could say that this is technically a hack, since defaultCheck is meant for filtering exports
        ([path, exportDefault], _2, id, defaultCheck) => exportDefault === defaultCheck && metroModules[id]?.__filePath === path,
        ([path, exportDefault]) => `schat.metro.byFilePath(${path},${exportDefault})`
      );
      byMutableProp = createFilterDefinition(([prop], m2) => m2?.[prop] && !Object.getOwnPropertyDescriptor(m2, prop)?.get, (prop) => `schat.metro.byMutableProp(${prop})`);
    }
  });

  // src/metro/finders.ts
  function filterExports(moduleExports, moduleId, filter) {
    if (moduleExports.default && moduleExports.__esModule && filter(moduleExports.default, moduleId, true)) {
      return {
        exports: filter.raw ? moduleExports : moduleExports.default,
        defaultExport: !filter.raw
      };
    }
    if (!filter.raw && filter(moduleExports, moduleId, false)) {
      return {
        exports: moduleExports,
        defaultExport: false
      };
    }
    return {};
  }
  function findModule(filter) {
    var { cacheId, finish } = getCacherForUniq(filter.uniq, false);
    for (var [id, moduleExports] of getModules(filter.uniq, false)) {
      var { exports: testedExports, defaultExport } = filterExports(moduleExports, id, filter);
      if (testedExports !== void 0) {
        cacheId(id, testedExports);
        return {
          id,
          defaultExport
        };
      }
    }
    finish(true);
    return {};
  }
  function findModuleId(filter) {
    return findModule(filter)?.id;
  }
  function findExports(filter) {
    var { id, defaultExport } = findModule(filter);
    if (id == null)
      return;
    return defaultExport ? requireModule(id).default : requireModule(id);
  }
  function findAllModule(filter) {
    var { cacheId, finish } = getCacherForUniq(filter.uniq, true);
    var foundExports = [];
    for (var [id, moduleExports] of getModules(filter.uniq, true)) {
      var { exports: testedExports, defaultExport } = filterExports(moduleExports, id, filter);
      if (testedExports !== void 0 && typeof defaultExport === "boolean") {
        foundExports.push({
          id,
          defaultExport
        });
        cacheId(id, testedExports);
      }
    }
    finish(foundExports.length === 0);
    return foundExports;
  }
  function findAllModuleId(filter) {
    return findAllModule(filter).map((e) => e.id);
  }
  function findAllExports(filter) {
    return findAllModule(filter).map((ret) => {
      if (!ret.id)
        return;
      var { id, defaultExport } = ret;
      return defaultExport ? requireModule(id).default : requireModule(id);
    });
  }
  var init_finders = __esm({
    "src/metro/finders.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_caches();
      init_modules2();
    }
  });

  // src/lib/utils/lazy.ts
  var lazy_exports = {};
  __export(lazy_exports, {
    getProxyFactory: () => getProxyFactory,
    lazyDestructure: () => lazyDestructure,
    proxyLazy: () => proxyLazy
  });
  function proxyLazy(factory, opts = {}) {
    var cache;
    var dummy = opts.hint !== "object" ? function dummy2() {
    } : {};
    var proxyFactory = () => cache ??= factory();
    var proxy = new Proxy(dummy, lazyHandler);
    factories.set(proxy, proxyFactory);
    proxyContextHolder.set(dummy, {
      factory,
      options: opts
    });
    return proxy;
  }
  function lazyDestructure(factory, opts = {}) {
    var proxiedObject = proxyLazy(factory);
    return new Proxy({}, {
      get(_2, property) {
        if (property === Symbol.iterator) {
          return function* () {
            yield proxiedObject;
            yield new Proxy({}, {
              get: (_3, p) => proxyLazy(() => proxiedObject[p], opts)
            });
            throw new Error("This is not a real iterator, this is likely used incorrectly");
          };
        }
        return proxyLazy(() => proxiedObject[property], opts);
      }
    });
  }
  function getProxyFactory(obj) {
    return factories.get(obj);
  }
  var unconfigurable, isUnconfigurable, factories, proxyContextHolder, lazyHandler;
  var init_lazy = __esm({
    "src/lib/utils/lazy.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      unconfigurable = /* @__PURE__ */ new Set([
        "arguments",
        "caller",
        "prototype"
      ]);
      isUnconfigurable = (key) => typeof key === "string" && unconfigurable.has(key);
      factories = /* @__PURE__ */ new WeakMap();
      proxyContextHolder = /* @__PURE__ */ new WeakMap();
      lazyHandler = {
        ...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map((fnName) => {
          return [
            fnName,
            (target, ...args) => {
              var contextHolder = proxyContextHolder.get(target);
              var resolved = contextHolder?.factory();
              if (!resolved)
                throw new Error(`Trying to Reflect.${fnName} of ${typeof resolved}`);
              return Reflect[fnName](resolved, ...args);
            }
          ];
        })),
        has(target, p) {
          var contextHolder = proxyContextHolder.get(target);
          if (contextHolder?.options) {
            var { exemptedEntries: isolatedEntries } = contextHolder.options;
            if (isolatedEntries && p in isolatedEntries)
              return true;
          }
          var resolved = contextHolder?.factory();
          if (!resolved)
            throw new Error(`Trying to Reflect.has of ${typeof resolved}`);
          return Reflect.has(resolved, p);
        },
        get(target, p, receiver) {
          if (false)
            return true;
          var contextHolder = proxyContextHolder.get(target);
          if (contextHolder?.options) {
            var { exemptedEntries: isolatedEntries } = contextHolder.options;
            if (isolatedEntries?.[p])
              return isolatedEntries[p];
          }
          var resolved = contextHolder?.factory();
          if (!resolved)
            throw new Error(`Trying to Reflect.get of ${typeof resolved}`);
          return Reflect.get(resolved, p, receiver);
        },
        ownKeys: (target) => {
          var contextHolder = proxyContextHolder.get(target);
          var resolved = contextHolder?.factory();
          if (!resolved)
            throw new Error(`Trying to Reflect.ownKeys of ${typeof resolved}`);
          var cacheKeys = Reflect.ownKeys(resolved);
          unconfigurable.forEach((key) => !cacheKeys.includes(key) && cacheKeys.push(key));
          return cacheKeys;
        },
        getOwnPropertyDescriptor: (target, p) => {
          if (isUnconfigurable(p))
            return Reflect.getOwnPropertyDescriptor(target, p);
          var contextHolder = proxyContextHolder.get(target);
          var resolved = contextHolder?.factory();
          if (!resolved)
            throw new Error(`Trying to getOwnPropertyDescriptor of ${typeof resolved}`);
          var descriptor = Reflect.getOwnPropertyDescriptor(resolved, p);
          if (descriptor)
            Object.defineProperty(target, p, descriptor);
          return descriptor;
        }
      };
    }
  });

  // src/metro/lazy.ts
  var lazy_exports2 = {};
  __export(lazy_exports2, {
    _lazyContextSymbol: () => _lazyContextSymbol,
    createLazyModule: () => createLazyModule,
    getLazyContext: () => getLazyContext
  });
  function getIndexedFind(filter) {
    var modulesMap = getMetroCache().findIndex[filter.uniq];
    if (!modulesMap)
      return void 0;
    for (var k in modulesMap)
      if (k[0] !== "_")
        return Number(k);
  }
  function subscribeLazyModule(proxy, callback) {
    var info = getLazyContext(proxy);
    if (!info)
      throw new Error("Subscribing a module for non-proxy-find");
    if (!info.indexed)
      throw new Error("Attempting to subscribe to a non-indexed find");
    return subscribeModule(info.moduleId, () => {
      callback(findExports(info.filter));
    });
  }
  function getLazyContext(proxy) {
    return _lazyContexts.get(proxy);
  }
  function createLazyModule(filter) {
    var cache = void 0;
    var moduleId = getIndexedFind(filter);
    var context = {
      filter,
      indexed: !!moduleId,
      moduleId,
      getExports(cb) {
        if (!moduleId || metroModules[moduleId]?.isInitialized) {
          cb(this.forceLoad());
          return () => void 0;
        }
        return this.subscribe(cb);
      },
      subscribe(cb) {
        return subscribeLazyModule(proxy, cb);
      },
      get cache() {
        return cache;
      },
      forceLoad() {
        cache ??= findExports(filter);
        if (!cache)
          throw new Error(`${filter.uniq} is ${typeof cache}! (id ${context.moduleId ?? "unknown"})`);
        return cache;
      }
    };
    var proxy = proxyLazy(() => context.forceLoad(), {
      exemptedEntries: {
        [_lazyContextSymbol]: context,
        [_patcherDelaySymbol]: (cb) => context.getExports(cb)
      }
    });
    _lazyContexts.set(proxy, context);
    return proxy;
  }
  var _lazyContextSymbol, _lazyContexts;
  var init_lazy2 = __esm({
    "src/metro/lazy.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_patcher();
      init_lazy();
      init_finders();
      init_caches();
      init_modules2();
      _lazyContextSymbol = Symbol.for("schat.metro.lazyContext");
      _lazyContexts = /* @__PURE__ */ new WeakMap();
    }
  });

  // src/metro/wrappers.ts
  var findByProps, findByPropsLazy, findByPropsAll, findByName, findByNameLazy, findByNameAll, findByDisplayName, findByDisplayNameLazy, findByDisplayNameAll, findByTypeName, findByTypeNameLazy, findByTypeNameAll, findByStoreName, findByStoreNameLazy, findByFilePath, findByFilePathLazy;
  var init_wrappers = __esm({
    "src/metro/wrappers.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_filters();
      init_finders();
      init_lazy2();
      findByProps = (...props) => findExports(byProps(...props));
      findByPropsLazy = (...props) => createLazyModule(byProps(...props));
      findByPropsAll = (...props) => findAllExports(byProps(...props));
      findByName = (name, expDefault = true) => findExports(expDefault ? byName(name) : byName.byRaw(name));
      findByNameLazy = (name, expDefault = true) => createLazyModule(expDefault ? byName(name) : byName.byRaw(name));
      findByNameAll = (name, expDefault = true) => findAllExports(expDefault ? byName(name) : byName.byRaw(name));
      findByDisplayName = (name, expDefault = true) => findExports(expDefault ? byDisplayName(name) : byDisplayName.byRaw(name));
      findByDisplayNameLazy = (name, expDefault = true) => createLazyModule(expDefault ? byDisplayName(name) : byDisplayName.byRaw(name));
      findByDisplayNameAll = (name, expDefault = true) => findAllExports(expDefault ? byDisplayName(name) : byDisplayName.byRaw(name));
      findByTypeName = (name, expDefault = true) => findExports(expDefault ? byTypeName(name) : byTypeName.byRaw(name));
      findByTypeNameLazy = (name, expDefault = true) => createLazyModule(expDefault ? byTypeName(name) : byTypeName.byRaw(name));
      findByTypeNameAll = (name, expDefault = true) => findAllExports(expDefault ? byTypeName(name) : byTypeName.byRaw(name));
      findByStoreName = (name) => findExports(byStoreName(name));
      findByStoreNameLazy = (name) => createLazyModule(byStoreName(name));
      findByFilePath = (path, expDefault = false) => findExports(byFilePath(path, expDefault));
      findByFilePathLazy = (path, expDefault = false) => createLazyModule(byFilePath(path, expDefault));
    }
  });

  // shims/depsModule.ts
  var require_depsModule = __commonJS({
    "shims/depsModule.ts"(exports, module) {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_wrappers();
      module.exports = {
        "react": findByPropsLazy("createElement"),
        "react-native": findByPropsLazy("AppRegistry"),
        "util": findByPropsLazy("inspect", "isNullOrUndefined"),
        "moment": findByPropsLazy("isMoment"),
        "chroma-js": findByPropsLazy("brewer"),
        "lodash": findByPropsLazy("forEachRight"),
        "@shopify/react-native-skia": findByPropsLazy("useFont")
      };
    }
  });

  // globals:react-native
  var require_react_native = __commonJS({
    "globals:react-native"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["react-native"];
    }
  });

  // src/core/vendetta/storage.ts
  function createProxy(target = {}) {
    var emitter = new Emitter();
    var childrens = /* @__PURE__ */ new WeakMap();
    var proxiedChildrenSet = /* @__PURE__ */ new WeakSet();
    function createProxy1(target2, path) {
      return new Proxy(target2, {
        get(target3, prop) {
          if (prop === emitterSymbol)
            return emitter;
          var newPath = [
            ...path,
            prop
          ];
          var value = target3[prop];
          if (value !== void 0 && value !== null) {
            emitter.emit("GET", {
              path: newPath,
              value
            });
            if (typeof value === "object") {
              if (proxiedChildrenSet.has(value))
                return value;
              if (childrens.has(value))
                return childrens.get(value);
              var childrenProxy = createProxy1(value, newPath);
              childrens.set(value, childrenProxy);
              return childrenProxy;
            }
            return value;
          }
          return value;
        },
        set(target3, prop, value) {
          if (typeof value === "object") {
            if (childrens.has(value)) {
              target3[prop] = childrens.get(value);
            } else {
              var childrenProxy = createProxy1(value, [
                ...path,
                prop
              ]);
              childrens.set(value, childrenProxy);
              proxiedChildrenSet.add(value);
              target3[prop] = childrenProxy;
            }
          } else {
            target3[prop] = value;
          }
          emitter.emit("SET", {
            path: [
              ...path,
              prop
            ],
            value: target3[prop]
          });
          return true;
        },
        deleteProperty(target3, prop) {
          var value = typeof target3[prop] === "object" ? childrens.get(target3[prop]) : target3[prop];
          var success = delete target3[prop];
          if (success)
            emitter.emit("DEL", {
              value,
              path: [
                ...path,
                prop
              ]
            });
          return success;
        }
      });
    }
    return {
      proxy: createProxy1(target, []),
      emitter
    };
  }
  function useProxy(storage) {
    var emitter = storage?.[emitterSymbol];
    if (!emitter)
      throw new Error("storage?.[emitterSymbol] is undefined");
    var [, forceUpdate] = React.useReducer((n) => ~n, 0);
    React.useEffect(() => {
      var listener = (event, data) => {
        if (event === "DEL" && data.value === storage)
          return;
        forceUpdate();
      };
      emitter.on("SET", listener);
      emitter.on("DEL", listener);
      return () => {
        emitter.off("SET", listener);
        emitter.off("DEL", listener);
      };
    }, []);
    return storage;
  }
  function createStorage(backend) {
    return _createStorage.apply(this, arguments);
  }
  function _createStorage() {
    _createStorage = _async_to_generator(function* (backend) {
      var data = yield backend.get();
      var { proxy, emitter } = createProxy(data);
      var handler = () => backend.set(proxy);
      emitter.on("SET", handler);
      emitter.on("DEL", handler);
      return proxy;
    });
    return _createStorage.apply(this, arguments);
  }
  function wrapSync(store) {
    var awaited = void 0;
    var awaitQueue = [];
    var awaitInit = (cb) => awaited ? cb() : awaitQueue.push(cb);
    store.then((v2) => {
      awaited = v2;
      awaitQueue.forEach((cb) => cb());
    });
    return new Proxy({}, {
      ...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map((k) => [
        k,
        (t, ...a) => Reflect[k](awaited ?? t, ...a)
      ])),
      get(target, prop, recv) {
        if (prop === syncAwaitSymbol)
          return awaitInit;
        return Reflect.get(awaited ?? target, prop, recv);
      }
    });
  }
  function awaitStorage(...stores) {
    return Promise.all(stores.map((store) => new Promise((res) => store[syncAwaitSymbol](res))));
  }
  var import_react_native, emitterSymbol, syncAwaitSymbol, ILLEGAL_CHARS_REGEX, filePathFixer, getMMKVPath, purgeStorage, createMMKVBackend, createFileBackend;
  var init_storage = __esm({
    "src/core/vendetta/storage.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_Emitter();
      init_modules();
      import_react_native = __toESM(require_react_native());
      emitterSymbol = Symbol.for("vendetta.storage.emitter");
      syncAwaitSymbol = Symbol.for("vendetta.storage.accessor");
      ILLEGAL_CHARS_REGEX = /[<>:"/\\|?*]/g;
      filePathFixer = (file) => import_react_native.Platform.select({
        default: file,
        ios: NativeFileModule.saveFileToGallery ? file : `Documents/${file}`
      });
      getMMKVPath = (name) => {
        if (ILLEGAL_CHARS_REGEX.test(name)) {
          name = name.replace(ILLEGAL_CHARS_REGEX, "-").replace(/-+/g, "-");
        }
        return `vd_mmkv/${name}`;
      };
      purgeStorage = /* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* (store) {
          if (yield NativeCacheModule.getItem(store)) {
            NativeCacheModule.removeItem(store);
          }
          var mmkvPath = getMMKVPath(store);
          if (yield NativeFileModule.fileExists(`${NativeFileModule.getConstants().DocumentsDirPath}/${mmkvPath}`)) {
            yield NativeFileModule.removeFile?.("documents", mmkvPath);
          }
        });
        return function purgeStorage3(store) {
          return _ref.apply(this, arguments);
        };
      }();
      createMMKVBackend = (store, defaultData = {}) => {
        var mmkvPath = getMMKVPath(store);
        var defaultStr = JSON.stringify(defaultData);
        return createFileBackend(mmkvPath, defaultData, _async_to_generator(function* () {
          var path = `${NativeFileModule.getConstants().DocumentsDirPath}/${mmkvPath}`;
          if (yield NativeFileModule.fileExists(path))
            return;
          var oldData = (yield NativeCacheModule.getItem(store)) ?? defaultStr;
          if (oldData === "!!LARGE_VALUE!!") {
            var cachePath = `${NativeFileModule.getConstants().CacheDirPath}/mmkv/${store}`;
            if (yield NativeFileModule.fileExists(cachePath)) {
              oldData = yield NativeFileModule.readFile(cachePath, "utf8");
            } else {
              console.log(`${store}: Experienced data loss :(`);
              oldData = defaultStr;
            }
          }
          try {
            JSON.parse(oldData);
          } catch (e) {
            console.error(`${store} had an unparseable data while migrating`);
            oldData = defaultStr;
          }
          yield NativeFileModule.writeFile("documents", filePathFixer(mmkvPath), oldData, "utf8");
          if ((yield NativeCacheModule.getItem(store)) !== null) {
            NativeCacheModule.removeItem(store);
            console.log(`Successfully migrated ${store} store from MMKV storage to fs`);
          }
        })());
      };
      createFileBackend = (file, defaultData = {}, migratePromise) => {
        return {
          get: /* @__PURE__ */ _async_to_generator(function* () {
            yield migratePromise;
            var path = `${NativeFileModule.getConstants().DocumentsDirPath}/${file}`;
            if (yield NativeFileModule.fileExists(path)) {
              var content = yield NativeFileModule.readFile(path, "utf8");
              try {
                return JSON.parse(content);
              } catch (e) {
              }
            }
            yield NativeFileModule.writeFile("documents", filePathFixer(file), JSON.stringify(defaultData), "utf8");
            return JSON.parse(yield NativeFileModule.readFile(path, "utf8"));
          }),
          set: /* @__PURE__ */ function() {
            var _ref = _async_to_generator(function* (data) {
              yield migratePromise;
              yield NativeFileModule.writeFile("documents", filePathFixer(file), JSON.stringify(data), "utf8");
            });
            return function(data) {
              return _ref.apply(this, arguments);
            };
          }()
        };
      };
    }
  });

  // node_modules/.pnpm/@gullerya+object-observer@6.1.3/node_modules/@gullerya/object-observer/dist/object-observer.min.js
  var m, x, E, T, K, c, $, N, Y, I, B, D, R, z, y, g, q, H, G, J, F, P, L, C, Q, X, Z, _, b, S, V, U, W, v;
  var init_object_observer_min = __esm({
    "node_modules/.pnpm/@gullerya+object-observer@6.1.3/node_modules/@gullerya/object-observer/dist/object-observer.min.js"() {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_create_class();
      init_inherits();
      m = "insert";
      x = "update";
      E = "delete";
      T = "reverse";
      K = "shuffle";
      c = Symbol.for("object-observer-meta-key-0");
      $ = {
        async: 1
      };
      N = (o) => {
        if (!o || typeof o != "object")
          return null;
        var t = {}, e = [];
        for (var [r, n] of Object.entries(o))
          if (r === "path") {
            if (typeof n != "string" || n === "")
              throw new Error('"path" option, if/when provided, MUST be a non-empty string');
            t[r] = n;
          } else if (r === "pathsOf") {
            if (o.path)
              throw new Error('"pathsOf" option MAY NOT be specified together with "path" option');
            if (typeof n != "string")
              throw new Error('"pathsOf" option, if/when provided, MUST be a string (MAY be empty)');
            t[r] = o.pathsOf.split(".").filter(Boolean);
          } else if (r === "pathsFrom") {
            if (o.path || o.pathsOf)
              throw new Error('"pathsFrom" option MAY NOT be specified together with "path"/"pathsOf" option/s');
            if (typeof n != "string" || n === "")
              throw new Error('"pathsFrom" option, if/when provided, MUST be a non-empty string');
            t[r] = n;
          } else
            e.push(r);
        if (e.length)
          throw new Error(`'${e.join(", ")}' is/are not a valid observer option/s`);
        return t;
      };
      Y = (o, t, e) => {
        var r = {};
        r[c] = t;
        for (var n in o)
          r[n] = g(o[n], n, t, e);
        return r;
      };
      I = (o, t, e) => {
        var r = o.length;
        var n = new Array(r);
        n[c] = t;
        for (var i = 0; i < r; i++)
          n[i] = g(o[i], i, t, e);
        return n;
      };
      B = (o, t) => (o[c] = t, o);
      D = (o, t) => {
        if (o === null)
          return t;
        var e = t;
        if (o.path) {
          var r = o.path;
          e = t.filter((n2) => n2.path.join(".") === r);
        } else if (o.pathsOf) {
          var r1 = o.pathsOf, n = r1.join(".");
          e = t.filter((i) => (i.path.length === r1.length + 1 || i.path.length === r1.length && (i.type === T || i.type === K)) && i.path.join(".").startsWith(n));
        } else if (o.pathsFrom) {
          var r2 = o.pathsFrom;
          e = t.filter((n2) => n2.path.join(".").startsWith(r2));
        }
        return e;
      };
      R = (o, t) => {
        try {
          o(t);
        } catch (e) {
          console.error(`failed to notify listener ${o} with ${t}`, e);
        }
      };
      z = function z2() {
        var t = this.batches;
        this.batches = [];
        for (var [e, r] of t)
          R(e, r);
      };
      y = (o, t) => {
        var e = o, r, n, i, l, h, s;
        var u = t.length;
        do {
          for (r = e.options.async, n = e.observers, s = n.length; s--; )
            if ([i, l] = n[s], h = D(l, t), h.length)
              if (r) {
                e.batches.length === 0 && queueMicrotask(z.bind(e));
                var a = void 0;
                for (var p of e.batches)
                  if (p[0] === i) {
                    a = p;
                    break;
                  }
                a || (a = [
                  i,
                  []
                ], e.batches.push(a)), Array.prototype.push.apply(a[1], h);
              } else
                R(i, h);
          var f = e.parent;
          if (f) {
            for (var a1 = 0; a1 < u; a1++) {
              var p1 = t[a1];
              t[a1] = new b(p1.type, [
                e.ownKey,
                ...p1.path
              ], p1.value, p1.oldValue, p1.object);
            }
            e = f;
          } else
            e = null;
        } while (e);
      };
      g = (o, t, e, r) => r !== void 0 && r.has(o) ? null : typeof o != "object" || o === null ? o : Array.isArray(o) ? new U({
        target: o,
        ownKey: t,
        parent: e,
        visited: r
      }).proxy : ArrayBuffer.isView(o) ? new W({
        target: o,
        ownKey: t,
        parent: e
      }).proxy : o instanceof Date ? o : new V({
        target: o,
        ownKey: t,
        parent: e,
        visited: r
      }).proxy;
      q = function q2() {
        var t = this[c], e = t.target, r = e.length - 1;
        var n = e.pop();
        if (n && typeof n == "object") {
          var l = n[c];
          l && (n = l.detach());
        }
        var i = [
          new b(E, [
            r
          ], void 0, n, this)
        ];
        return y(t, i), n;
      };
      H = function H2() {
        var t = this[c], e = t.target, r = arguments.length, n = new Array(r), i = e.length;
        for (var s = 0; s < r; s++)
          n[s] = g(arguments[s], i + s, t);
        var l = Reflect.apply(e.push, e, n), h = [];
        for (var s1 = i, u = e.length; s1 < u; s1++)
          h[s1 - i] = new b(m, [
            s1
          ], e[s1], void 0, this);
        return y(t, h), l;
      };
      G = function G2() {
        var t = this[c], e = t.target;
        var r, n, i, l, h;
        for (r = e.shift(), r && typeof r == "object" && (h = r[c], h && (r = h.detach())), n = 0, i = e.length; n < i; n++)
          l = e[n], l && typeof l == "object" && (h = l[c], h && (h.ownKey = n));
        var s = [
          new b(E, [
            0
          ], void 0, r, this)
        ];
        return y(t, s), r;
      };
      J = function J2() {
        var t = this[c], e = t.target, r = arguments.length, n = new Array(r);
        for (var s = 0; s < r; s++)
          n[s] = g(arguments[s], s, t);
        var i = Reflect.apply(e.unshift, e, n);
        for (var s1 = 0, u = e.length, f; s1 < u; s1++)
          if (f = e[s1], f && typeof f == "object") {
            var a = f[c];
            a && (a.ownKey = s1);
          }
        var l = n.length, h = new Array(l);
        for (var s2 = 0; s2 < l; s2++)
          h[s2] = new b(m, [
            s2
          ], e[s2], void 0, this);
        return y(t, h), i;
      };
      F = function F2() {
        var t = this[c], e = t.target;
        var r, n, i;
        for (e.reverse(), r = 0, n = e.length; r < n; r++)
          if (i = e[r], i && typeof i == "object") {
            var h = i[c];
            h && (h.ownKey = r);
          }
        var l = [
          new b(T, [], void 0, void 0, this)
        ];
        return y(t, l), this;
      };
      P = function P2(t) {
        var e = this[c], r = e.target;
        var n, i, l;
        for (r.sort(t), n = 0, i = r.length; n < i; n++)
          if (l = r[n], l && typeof l == "object") {
            var s = l[c];
            s && (s.ownKey = n);
          }
        var h = [
          new b(K, [], void 0, void 0, this)
        ];
        return y(e, h), this;
      };
      L = function L2(t, e, r) {
        var n = this[c], i = n.target, l = [], h = i.length, s = i.slice(0);
        if (e = e === void 0 ? 0 : e < 0 ? Math.max(h + e, 0) : Math.min(e, h), r = r === void 0 ? h : r < 0 ? Math.max(h + r, 0) : Math.min(r, h), e < h && r > e) {
          i.fill(t, e, r);
          var u;
          for (var f = e, a, p; f < r; f++)
            a = i[f], i[f] = g(a, f, n), f in s ? (p = s[f], p && typeof p == "object" && (u = p[c], u && (p = u.detach())), l.push(new b(x, [
              f
            ], i[f], p, this))) : l.push(new b(m, [
              f
            ], i[f], void 0, this));
          y(n, l);
        }
        return this;
      };
      C = function C2(t, e, r) {
        var n = this[c], i = n.target, l = i.length;
        t = t < 0 ? Math.max(l + t, 0) : t, e = e === void 0 ? 0 : e < 0 ? Math.max(l + e, 0) : Math.min(e, l), r = r === void 0 ? l : r < 0 ? Math.max(l + r, 0) : Math.min(r, l);
        var h = Math.min(r - e, l - t);
        if (t < l && t !== e && h > 0) {
          var s = i.slice(0), u = [];
          i.copyWithin(t, e, r);
          for (var f = t, a, p, O; f < t + h; f++)
            a = i[f], a && typeof a == "object" && (a = g(a, f, n), i[f] = a), p = s[f], p && typeof p == "object" && (O = p[c], O && (p = O.detach())), !(typeof a != "object" && a === p) && u.push(new b(x, [
              f
            ], a, p, this));
          y(n, u);
        }
        return this;
      };
      Q = function Q2() {
        var t = this[c], e = t.target, r = arguments.length, n = new Array(r), i = e.length;
        for (var w = 0; w < r; w++)
          n[w] = g(arguments[w], w, t);
        var l = r === 0 ? 0 : n[0] < 0 ? i + n[0] : n[0], h = r < 2 ? i - l : n[1], s = Math.max(r - 2, 0), u = Reflect.apply(e.splice, e, n), f = e.length;
        var a;
        for (var w1 = 0, A; w1 < f; w1++)
          A = e[w1], A && typeof A == "object" && (a = A[c], a && (a.ownKey = w1));
        var p, O, j;
        for (p = 0, O = u.length; p < O; p++)
          j = u[p], j && typeof j == "object" && (a = j[c], a && (u[p] = a.detach()));
        var M = [];
        var d;
        for (d = 0; d < h; d++)
          d < s ? M.push(new b(x, [
            l + d
          ], e[l + d], u[d], this)) : M.push(new b(E, [
            l + d
          ], void 0, u[d], this));
        for (; d < s; d++)
          M.push(new b(m, [
            l + d
          ], e[l + d], void 0, this));
        return y(t, M), u;
      };
      X = function X2(t, e) {
        var r = this[c], n = r.target, i = t.length, l = n.slice(0);
        e = e || 0, n.set(t, e);
        var h = new Array(i);
        for (var s = e; s < i + e; s++)
          h[s - e] = new b(x, [
            s
          ], n[s], l[s], this);
        y(r, h);
      };
      Z = {
        pop: q,
        push: H,
        shift: G,
        unshift: J,
        reverse: F,
        sort: P,
        fill: L,
        copyWithin: C,
        splice: Q
      };
      _ = {
        reverse: F,
        sort: P,
        fill: L,
        copyWithin: C,
        set: X
      };
      b = function b2(t, e, r, n, i) {
        "use strict";
        _class_call_check(this, b2);
        this.type = t, this.path = e, this.value = r, this.oldValue = n, this.object = i;
      };
      S = /* @__PURE__ */ function() {
        "use strict";
        function S2(t, e) {
          _class_call_check(this, S2);
          var { target: r, parent: n, ownKey: i, visited: l = /* @__PURE__ */ new Set() } = t;
          n && i !== void 0 ? (this.parent = n, this.ownKey = i) : (this.parent = null, this.ownKey = null), l.add(r);
          var h = e(r, this, l);
          l.delete(r), this.observers = [], this.revocable = Proxy.revocable(h, this), this.proxy = this.revocable.proxy, this.target = h, this.options = this.processOptions(t.options), this.options.async && (this.batches = []);
        }
        _create_class(S2, [
          {
            key: "processOptions",
            value: function processOptions(t) {
              if (t) {
                if (typeof t != "object")
                  throw new Error(`Observable options if/when provided, MAY only be an object, got '${t}'`);
                var e = Object.keys(t).filter((r) => !(r in $));
                if (e.length)
                  throw new Error(`'${e.join(", ")}' is/are not a valid Observable option/s`);
                return Object.assign({}, t);
              } else
                return {};
            }
          },
          {
            key: "detach",
            value: function detach() {
              return this.parent = null, this.target;
            }
          },
          {
            key: "set",
            value: function set(t, e, r) {
              var n = t[e];
              if (r !== n) {
                var i = g(r, e, this);
                if (t[e] = i, n && typeof n == "object") {
                  var h = n[c];
                  h && (n = h.detach());
                }
                var l = n === void 0 ? [
                  new b(m, [
                    e
                  ], i, void 0, this.proxy)
                ] : [
                  new b(x, [
                    e
                  ], i, n, this.proxy)
                ];
                y(this, l);
              }
              return true;
            }
          },
          {
            key: "deleteProperty",
            value: function deleteProperty(t, e) {
              var r = t[e];
              if (delete t[e], r && typeof r == "object") {
                var i = r[c];
                i && (r = i.detach());
              }
              var n = [
                new b(E, [
                  e
                ], void 0, r, this.proxy)
              ];
              return y(this, n), true;
            }
          }
        ]);
        return S2;
      }();
      V = /* @__PURE__ */ function(S2) {
        "use strict";
        _inherits(V2, S2);
        function V2(t) {
          _class_call_check(this, V2);
          return _call_super(this, V2, [
            t,
            Y
          ]);
        }
        return V2;
      }(S);
      U = /* @__PURE__ */ function(S2) {
        "use strict";
        _inherits(U2, S2);
        function U2(t) {
          _class_call_check(this, U2);
          return _call_super(this, U2, [
            t,
            I
          ]);
        }
        _create_class(U2, [
          {
            key: "get",
            value: function get(t, e) {
              return Z[e] || t[e];
            }
          }
        ]);
        return U2;
      }(S);
      W = /* @__PURE__ */ function(S2) {
        "use strict";
        _inherits(W2, S2);
        function W2(t) {
          _class_call_check(this, W2);
          return _call_super(this, W2, [
            t,
            B
          ]);
        }
        _create_class(W2, [
          {
            key: "get",
            value: function get(t, e) {
              return _[e] || t[e];
            }
          }
        ]);
        return W2;
      }(S);
      v = Object.freeze({
        from: (o, t) => {
          if (!o || typeof o != "object")
            throw new Error("observable MAY ONLY be created from a non-null object");
          if (o[c])
            return o;
          if (Array.isArray(o))
            return new U({
              target: o,
              ownKey: null,
              parent: null,
              options: t
            }).proxy;
          if (ArrayBuffer.isView(o))
            return new W({
              target: o,
              ownKey: null,
              parent: null,
              options: t
            }).proxy;
          if (o instanceof Date)
            throw new Error(`${o} found to be one of a non-observable types`);
          return new V({
            target: o,
            ownKey: null,
            parent: null,
            options: t
          }).proxy;
        },
        isObservable: (o) => !!(o && o[c]),
        observe: (o, t, e) => {
          if (!v.isObservable(o))
            throw new Error("invalid observable parameter");
          if (typeof t != "function")
            throw new Error(`observer MUST be a function, got '${t}'`);
          var r = o[c].observers;
          r.some((n) => n[0] === t) ? console.warn("observer may be bound to an observable only once; will NOT rebind") : r.push([
            t,
            N(e)
          ]);
        },
        unobserve: (o, ...t) => {
          if (!v.isObservable(o))
            throw new Error("invalid observable parameter");
          var e = o[c].observers;
          var r = e.length;
          if (r) {
            if (!t.length) {
              e.splice(0);
              return;
            }
            for (; r; )
              t.indexOf(e[--r][0]) >= 0 && e.splice(r, 1);
          }
        }
      });
    }
  });

  // src/lib/api/storage/index.ts
  var storage_exports = {};
  __export(storage_exports, {
    awaitStorage: () => awaitStorage2,
    createStorage: () => createStorage2,
    createStorageAndCallback: () => createStorageAndCallback,
    createStorageAsync: () => createStorageAsync,
    getPreloadedStorage: () => getPreloadedStorage,
    preloadStorageIfExists: () => preloadStorageIfExists,
    purgeStorage: () => purgeStorage2,
    updateStorage: () => updateStorage,
    useObservable: () => useObservable
  });
  function createFileBackend2(filePath) {
    var write = debounce((data) => {
      writeFile(filePath, JSON.stringify(data));
    }, 500);
    return {
      get: /* @__PURE__ */ _async_to_generator(function* () {
        try {
          return JSON.parse(yield readFile(filePath));
        } catch (e) {
          throw new Error(`Failed to parse storage from '${filePath}'`, {
            cause: e
          });
        }
      }),
      set: /* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* (data) {
          if (!data || typeof data !== "object") {
            throw new Error("data needs to be an object");
          }
          write(data);
        });
        return function(data) {
          return _ref.apply(this, arguments);
        };
      }(),
      exists: /* @__PURE__ */ _async_to_generator(function* () {
        return yield fileExists(filePath);
      })
    };
  }
  function useObservable(observables, opts) {
    if (observables.some((o) => o?.[storageInitErrorSymbol]))
      throw new Error("An error occured while initializing the storage");
    if (observables.some((o) => !v.isObservable(o))) {
      throw new Error("Argument passed isn't an Observable");
    }
    var [, forceUpdate] = React.useReducer((n) => ~n, 0);
    React.useEffect(() => {
      var listener = () => forceUpdate();
      observables.forEach((o) => v.observe(o, listener, opts));
      return () => {
        observables.forEach((o) => v.unobserve(o, listener));
      };
    }, []);
  }
  function updateStorage(path, value) {
    return _updateStorage.apply(this, arguments);
  }
  function _updateStorage() {
    _updateStorage = _async_to_generator(function* (path, value) {
      _loadedStorage[path] = value;
      createFileBackend2(path).set(value);
    });
    return _updateStorage.apply(this, arguments);
  }
  function createStorageAndCallback(path, cb, { dflt = {}, nullIfEmpty = false } = {}) {
    var emitter;
    var callback = (data) => {
      var proxy = new Proxy(v.from(data), {
        get(target, prop, receiver) {
          if (prop === Symbol.for("vendetta.storage.emitter")) {
            if (emitter)
              return emitter;
            emitter = new Emitter();
            v.observe(target, (changes) => {
              for (var change of changes) {
                emitter.emit(change.type !== "delete" ? "SET" : "DEL", {
                  path: change.path,
                  value: change.value
                });
              }
            });
            return emitter;
          }
          return Reflect.get(target, prop, receiver);
        }
      });
      var handler = () => backend.set(proxy);
      v.observe(proxy, handler);
      cb(proxy);
    };
    var backend = createFileBackend2(path);
    if (_loadedStorage[path]) {
      callback(_loadedStorage[path]);
    } else {
      backend.exists().then(/* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* (exists) {
          if (!exists) {
            if (nullIfEmpty) {
              callback(_loadedStorage[path] = null);
            } else {
              _loadedStorage[path] = dflt;
              yield backend.set(dflt);
              callback(dflt);
            }
          } else {
            callback(_loadedStorage[path] = yield backend.get());
          }
        });
        return function(exists) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }
  function createStorageAsync(path) {
    return _createStorageAsync.apply(this, arguments);
  }
  function _createStorageAsync() {
    _createStorageAsync = _async_to_generator(function* (path, opts = {}) {
      return new Promise((r) => createStorageAndCallback(path, r, opts));
    });
    return _createStorageAsync.apply(this, arguments);
  }
  function preloadStorageIfExists(path) {
    return _preloadStorageIfExists.apply(this, arguments);
  }
  function _preloadStorageIfExists() {
    _preloadStorageIfExists = _async_to_generator(function* (path) {
      if (_loadedStorage[path])
        return true;
      var backend = createFileBackend2(path);
      if (yield backend.exists()) {
        _loadedStorage[path] = yield backend.get();
        return true;
      }
      return false;
    });
    return _preloadStorageIfExists.apply(this, arguments);
  }
  function purgeStorage2(path) {
    return _purgeStorage.apply(this, arguments);
  }
  function _purgeStorage() {
    _purgeStorage = _async_to_generator(function* (path) {
      yield removeFile(path);
      delete _loadedStorage[path];
    });
    return _purgeStorage.apply(this, arguments);
  }
  function awaitStorage2(...proxies) {
    return Promise.all(proxies.map((proxy) => proxy[storagePromiseSymbol]));
  }
  function getPreloadedStorage(path) {
    return _loadedStorage[path];
  }
  var storageInitErrorSymbol, storagePromiseSymbol, _loadedStorage, createStorage2;
  var init_storage2 = __esm({
    "src/lib/api/storage/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_Emitter();
      init_object_observer_min();
      init_fs();
      init_dist();
      storageInitErrorSymbol = Symbol.for("schat.storage.initError");
      storagePromiseSymbol = Symbol.for("schat.storage.promise");
      _loadedStorage = {};
      createStorage2 = (path, opts = {}) => {
        var promise = new Promise((r) => resolvePromise = r);
        var awaited, resolved, error, resolvePromise;
        createStorageAndCallback(path, (proxy) => {
          awaited = proxy;
          resolved = true;
          resolvePromise();
        }, opts);
        var check = () => {
          if (resolved)
            return true;
          throw new Error(`Attempted to access storage without initializing: ${path}`);
        };
        return new Proxy({}, {
          ...Object.fromEntries(Object.getOwnPropertyNames(Reflect).map((k) => [
            k,
            (t, ...a) => {
              return check() && Reflect[k](awaited, ...a);
            }
          ])),
          get(target, prop, recv) {
            if (prop === storageInitErrorSymbol)
              return error;
            if (prop === storagePromiseSymbol)
              return promise;
            return check() && Reflect.get(awaited ?? target, prop, recv);
          }
        });
      };
    }
  });

  // src/lib/utils/constants.ts
  var constants_exports = {};
  __export(constants_exports, {
    DISCORD_SERVER: () => DISCORD_SERVER,
    GITHUB: () => GITHUB,
    HTTP_REGEX: () => HTTP_REGEX,
    HTTP_REGEX_MULTI: () => HTTP_REGEX_MULTI,
    OFFICIAL_PLUGINS_REPO_URL: () => OFFICIAL_PLUGINS_REPO_URL,
    SCHAT_PROXY_PREFIX: () => SCHAT_PROXY_PREFIX,
    VD_DISCORD_SERVER_ID: () => VD_DISCORD_SERVER_ID,
    VD_PLUGINS_CHANNEL_ID: () => VD_PLUGINS_CHANNEL_ID,
    VD_PROXY_PREFIX: () => VD_PROXY_PREFIX,
    VD_THEMES_CHANNEL_ID: () => VD_THEMES_CHANNEL_ID
  });
  var DISCORD_SERVER, GITHUB, HTTP_REGEX, HTTP_REGEX_MULTI, SCHAT_PROXY_PREFIX, OFFICIAL_PLUGINS_REPO_URL, VD_PROXY_PREFIX, VD_DISCORD_SERVER_ID, VD_PLUGINS_CHANNEL_ID, VD_THEMES_CHANNEL_ID;
  var init_constants = __esm({
    "src/lib/utils/constants.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      DISCORD_SERVER = "https://discord.gg/uqbQvAHHve";
      GITHUB = "https://github.com/Soncresity-Industries/SChat-Tweak";
      HTTP_REGEX = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;
      HTTP_REGEX_MULTI = /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)/g;
      SCHAT_PROXY_PREFIX = "https://bn-plugins.github.io/vd-proxy";
      OFFICIAL_PLUGINS_REPO_URL = "https://bn-plugins.github.io/dist/repo.json";
      VD_PROXY_PREFIX = "https://vd-plugins.github.io/proxy";
      VD_DISCORD_SERVER_ID = "1015931589865246730";
      VD_PLUGINS_CHANNEL_ID = "1091880384561684561";
      VD_THEMES_CHANNEL_ID = "1091880434939482202";
    }
  });

  // src/lib/utils/cyrb64.ts
  function cyrb64(str, seed = 0) {
    var h1 = 3735928559 ^ seed, h2 = 1103547991 ^ seed;
    for (var i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507);
    h1 ^= Math.imul(h2 ^ h2 >>> 13, 3266489909);
    h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507);
    h2 ^= Math.imul(h1 ^ h1 >>> 13, 3266489909);
    return [
      h2 >>> 0,
      h1 >>> 0
    ];
  }
  function cyrb64Hash(str, seed = 0) {
    var [h2, h1] = cyrb64(str, seed);
    return h2.toString(36).padStart(7, "0") + h1.toString(36).padStart(7, "0");
  }
  var init_cyrb64 = __esm({
    "src/lib/utils/cyrb64.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/lib/utils/findInReactTree.ts
  function findInReactTree(tree, filter) {
    return findInTree(tree, filter, {
      walkable: [
        "props",
        "children",
        "child",
        "sibling"
      ]
    });
  }
  var init_findInReactTree = __esm({
    "src/lib/utils/findInReactTree.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_utils();
    }
  });

  // src/lib/utils/findInTree.ts
  function treeSearch(tree, filter, opts, depth) {
    if (depth > opts.maxDepth)
      return;
    if (!tree)
      return;
    try {
      if (filter(tree))
        return tree;
    } catch (e) {
    }
    if (Array.isArray(tree)) {
      for (var item of tree) {
        if (typeof item !== "object" || item === null)
          continue;
        try {
          var found = treeSearch(item, filter, opts, depth + 1);
          if (found)
            return found;
        } catch (e) {
        }
      }
    } else if (typeof tree === "object") {
      for (var key of Object.keys(tree)) {
        if (typeof tree[key] !== "object" || tree[key] === null)
          continue;
        if (opts.walkable.length && !opts.walkable.includes(key))
          continue;
        if (opts.ignore.includes(key))
          continue;
        try {
          var found1 = treeSearch(tree[key], filter, opts, depth + 1);
          if (found1)
            return found1;
        } catch (e) {
        }
      }
    }
  }
  function findInTree(tree, filter, { walkable = [], ignore = [], maxDepth = 100 } = {}) {
    return treeSearch(tree, filter, {
      walkable,
      ignore,
      maxDepth
    }, 0);
  }
  var init_findInTree = __esm({
    "src/lib/utils/findInTree.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/lib/utils/hookDefineProperty.ts
  function hookDefineProperty(target, property, cb) {
    var targetAsAny = target;
    if (property in target) {
      return void cb(targetAsAny[property]);
    }
    var value;
    Object.defineProperty(targetAsAny, property, {
      get: () => value,
      set(v2) {
        value = cb(v2) ?? v2;
      },
      configurable: true,
      enumerable: false
    });
    return () => {
      delete targetAsAny[property];
      targetAsAny[property] = value;
    };
  }
  var init_hookDefineProperty = __esm({
    "src/lib/utils/hookDefineProperty.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/lib/utils/invariant.ts
  function invariant(condition, message) {
    if (condition)
      return;
    var resolvedMessage = typeof message === "function" ? message() : message;
    var prefix = "[Invariant Violation]";
    var value = resolvedMessage ? `${prefix}: ${resolvedMessage}` : prefix;
    throw new Error(value);
  }
  var init_invariant = __esm({
    "src/lib/utils/invariant.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/lib/utils/logger.ts
  var logger_exports = {};
  __export(logger_exports, {
    LoggerClass: () => LoggerClass,
    logger: () => logger
  });
  var LoggerClass, logger;
  var init_logger = __esm({
    "src/lib/utils/logger.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_wrappers();
      LoggerClass = findByNameLazy("Logger");
      logger = new LoggerClass("SChat");
    }
  });

  // src/lib/utils/safeFetch.ts
  function safeFetch(input, options) {
    return _safeFetch.apply(this, arguments);
  }
  function _safeFetch() {
    _safeFetch = _async_to_generator(function* (input, options, timeout = 1e4) {
      var req = yield fetch(input, {
        signal: timeoutSignal(timeout),
        ...options
      });
      if (!req.ok)
        throw new Error(`Request returned non-ok: ${req.status} ${req.statusText}`);
      return req;
    });
    return _safeFetch.apply(this, arguments);
  }
  function timeoutSignal(ms) {
    var controller = new AbortController();
    setTimeout(() => controller.abort(`Timed out after ${ms}ms`), ms);
    return controller.signal;
  }
  var init_safeFetch = __esm({
    "src/lib/utils/safeFetch.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
    }
  });

  // src/lib/utils/index.ts
  var utils_exports = {};
  __export(utils_exports, {
    constants: () => constants_exports,
    cyrb64: () => cyrb64,
    findInReactTree: () => findInReactTree,
    findInTree: () => findInTree,
    hookDefineProperty: () => hookDefineProperty,
    invariant: () => invariant,
    lazy: () => lazy_exports,
    logger: () => logger_exports,
    safeFetch: () => safeFetch
  });
  var init_utils = __esm({
    "src/lib/utils/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_constants();
      init_cyrb64();
      init_findInReactTree();
      init_findInTree();
      init_hookDefineProperty();
      init_invariant();
      init_lazy();
      init_logger();
      init_safeFetch();
    }
  });

  // shims/jsxRuntime.ts
  var jsxRuntime_exports = {};
  __export(jsxRuntime_exports, {
    Fragment: () => Fragment,
    jsx: () => jsx,
    jsxs: () => jsxs
  });
  function unproxyFirstArg(args) {
    if (!args[0]) {
      throw new Error("The first argument (Component) is falsy. Ensure that you are passing a valid component.");
    }
    var factory = getProxyFactory(args[0]);
    if (factory)
      args[0] = factory();
    return args;
  }
  var jsxRuntime, Fragment, jsx, jsxs;
  var init_jsxRuntime = __esm({
    "shims/jsxRuntime.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_lazy();
      init_wrappers();
      jsxRuntime = findByPropsLazy("jsx", "jsxs", "Fragment");
      Fragment = Symbol.for("react.fragment");
      jsx = (...args) => jsxRuntime.jsx(...unproxyFirstArg(args));
      jsxs = (...args) => jsxRuntime.jsxs(...unproxyFirstArg(args));
    }
  });

  // src/lib/addons/themes/colors/preferences.ts
  var colorsPref;
  var init_preferences = __esm({
    "src/lib/addons/themes/colors/preferences.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_storage2();
      colorsPref = createStorage2("themes/colors/preferences.json", {
        dflt: {
          selected: null,
          customBackground: null
        }
      });
    }
  });

  // src/metro/common/components.ts
  var components_exports = {};
  __export(components_exports, {
    ActionSheet: () => ActionSheet,
    ActionSheetRow: () => ActionSheetRow,
    AlertActionButton: () => AlertActionButton,
    AlertActions: () => AlertActions,
    AlertModal: () => AlertModal,
    Avatar: () => Avatar,
    AvatarPile: () => AvatarPile,
    BottomSheetTitleHeader: () => BottomSheetTitleHeader,
    Button: () => Button,
    Card: () => Card,
    CompatButton: () => CompatButton,
    CompatSegmentedControl: () => CompatSegmentedControl,
    ContextMenu: () => ContextMenu,
    FlashList: () => FlashList,
    FloatingActionButton: () => FloatingActionButton,
    FormCheckbox: () => FormCheckbox,
    FormRadio: () => FormRadio,
    FormSwitch: () => FormSwitch,
    Forms: () => Forms,
    HelpMessage: () => HelpMessage,
    IconButton: () => IconButton,
    LegacyAlert: () => LegacyAlert,
    LegacyForm: () => LegacyForm,
    LegacyFormArrow: () => LegacyFormArrow,
    LegacyFormCTA: () => LegacyFormCTA,
    LegacyFormCTAButton: () => LegacyFormCTAButton,
    LegacyFormCardSection: () => LegacyFormCardSection,
    LegacyFormCheckbox: () => LegacyFormCheckbox,
    LegacyFormCheckboxRow: () => LegacyFormCheckboxRow,
    LegacyFormCheckmark: () => LegacyFormCheckmark,
    LegacyFormDivider: () => LegacyFormDivider,
    LegacyFormHint: () => LegacyFormHint,
    LegacyFormIcon: () => LegacyFormIcon,
    LegacyFormInput: () => LegacyFormInput,
    LegacyFormLabel: () => LegacyFormLabel,
    LegacyFormRadio: () => LegacyFormRadio,
    LegacyFormRadioGroup: () => LegacyFormRadioGroup,
    LegacyFormRadioRow: () => LegacyFormRadioRow,
    LegacyFormRow: () => LegacyFormRow,
    LegacyFormSection: () => LegacyFormSection,
    LegacyFormSelect: () => LegacyFormSelect,
    LegacyFormSliderRow: () => LegacyFormSliderRow,
    LegacyFormSubLabel: () => LegacyFormSubLabel,
    LegacyFormSwitch: () => LegacyFormSwitch,
    LegacyFormSwitchRow: () => LegacyFormSwitchRow,
    LegacyFormTernaryCheckBox: () => LegacyFormTernaryCheckBox,
    LegacyFormText: () => LegacyFormText,
    LegacyFormTitle: () => LegacyFormTitle,
    PressableScale: () => PressableScale,
    RedesignCompat: () => RedesignCompat,
    RowButton: () => RowButton,
    SafeAreaProvider: () => SafeAreaProvider,
    SafeAreaView: () => SafeAreaView,
    SegmentedControl: () => SegmentedControl,
    SegmentedControlPages: () => SegmentedControlPages,
    Stack: () => Stack,
    TableCheckbox: () => TableCheckbox,
    TableCheckboxRow: () => TableCheckboxRow,
    TableRadio: () => TableRadio,
    TableRadioGroup: () => TableRadioGroup,
    TableRadioRow: () => TableRadioRow,
    TableRow: () => TableRow,
    TableRowGroup: () => TableRowGroup,
    TableRowIcon: () => TableRowIcon,
    TableRowTrailingText: () => TableRowTrailingText,
    TableSwitch: () => TableSwitch,
    TableSwitchRow: () => TableSwitchRow,
    Text: () => Text,
    TextArea: () => TextArea,
    TextInput: () => TextInput,
    TwinButtons: () => TwinButtons,
    useSafeAreaInsets: () => useSafeAreaInsets,
    useSegmentedControlState: () => useSegmentedControlState
  });
  var bySingularProp, findSingular, findProp, LegacyAlert, CompatButton, HelpMessage, SafeAreaView, SafeAreaProvider, useSafeAreaInsets, ActionSheetRow, Button, TwinButtons, IconButton, RowButton, PressableScale, TableRow, TableRowIcon, TableRowTrailingText, TableRowGroup, TableRadioGroup, TableRadioRow, TableSwitchRow, TableCheckboxRow, TableSwitch, TableRadio, TableCheckbox, FormSwitch, FormRadio, FormCheckbox, Card, RedesignCompat, AlertModal, AlertActionButton, AlertActions, AvatarPile, ContextMenu, Stack, Avatar, TextInput, TextArea, SegmentedControl, SegmentedControlPages, useSegmentedControlState, CompatSegmentedControl, FloatingActionButton, ActionSheet, BottomSheetTitleHeader, textsModule, Text, Forms, LegacyForm, LegacyFormArrow, LegacyFormCTA, LegacyFormCTAButton, LegacyFormCardSection, LegacyFormCheckbox, LegacyFormCheckboxRow, LegacyFormCheckmark, LegacyFormDivider, LegacyFormHint, LegacyFormIcon, LegacyFormInput, LegacyFormLabel, LegacyFormRadio, LegacyFormRadioGroup, LegacyFormRadioRow, LegacyFormRow, LegacyFormSection, LegacyFormSelect, LegacyFormSliderRow, LegacyFormSubLabel, LegacyFormSwitch, LegacyFormSwitchRow, LegacyFormTernaryCheckBox, LegacyFormText, LegacyFormTitle, FlashList;
  var init_components = __esm({
    "src/metro/common/components.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_lazy();
      init_factories();
      init_finders();
      init_wrappers();
      bySingularProp = createFilterDefinition(([prop], m2) => m2[prop] && Object.keys(m2).length === 1, (prop) => `schat.metro.common.components.bySingularProp(${prop})`);
      findSingular = (prop) => proxyLazy(() => findExports(bySingularProp(prop))?.[prop]);
      findProp = (...props) => proxyLazy(() => findByProps(...props)[props[0]]);
      LegacyAlert = findByDisplayNameLazy("FluxContainer(Alert)");
      CompatButton = findByPropsLazy("Looks", "Colors", "Sizes");
      HelpMessage = findByNameLazy("HelpMessage");
      ({ SafeAreaView, SafeAreaProvider, useSafeAreaInsets } = lazyDestructure(() => findByProps("useSafeAreaInsets")));
      ActionSheetRow = findProp("ActionSheetRow");
      Button = findSingular("Button");
      TwinButtons = findProp("TwinButtons");
      IconButton = findSingular("IconButton");
      RowButton = findProp("RowButton");
      PressableScale = findProp("PressableScale");
      TableRow = findProp("TableRow");
      TableRowIcon = findProp("TableRowIcon");
      TableRowTrailingText = findProp("TableRowTrailingText");
      TableRowGroup = findProp("TableRowGroup");
      TableRadioGroup = findProp("TableRadioGroup");
      TableRadioRow = findProp("TableRadioRow");
      TableSwitchRow = findProp("TableSwitchRow");
      TableCheckboxRow = findProp("TableCheckboxRow");
      TableSwitch = findSingular("FormSwitch");
      TableRadio = findSingular("FormRadio");
      TableCheckbox = findSingular("FormCheckbox");
      FormSwitch = findSingular("FormSwitch");
      FormRadio = findSingular("FormRadio");
      FormCheckbox = findSingular("FormCheckbox");
      Card = findProp("Card");
      RedesignCompat = proxyLazy(() => findByProps("RedesignCompat").RedesignCompat);
      AlertModal = findProp("AlertModal");
      AlertActionButton = findProp("AlertActionButton");
      AlertActions = findProp("AlertActions");
      AvatarPile = findSingular("AvatarPile");
      ContextMenu = findProp("ContextMenu");
      Stack = findProp("Stack");
      Avatar = findProp("default", "AvatarSizes", "getStatusSize");
      TextInput = findSingular("TextInput");
      TextArea = findSingular("TextArea");
      SegmentedControl = findProp("SegmentedControl");
      SegmentedControlPages = findProp("SegmentedControlPages");
      useSegmentedControlState = findSingular("useSegmentedControlState");
      CompatSegmentedControl = findProp("CompatSegmentedControl");
      FloatingActionButton = findProp("FloatingActionButton");
      ActionSheet = findProp("ActionSheet");
      BottomSheetTitleHeader = findProp("BottomSheetTitleHeader");
      textsModule = findByPropsLazy("Text", "LegacyText");
      Text = proxyLazy(() => textsModule.Text);
      Forms = findByPropsLazy("Form", "FormSection");
      ({ Form: LegacyForm, FormArrow: LegacyFormArrow, FormCTA: LegacyFormCTA, FormCTAButton: LegacyFormCTAButton, FormCardSection: LegacyFormCardSection, FormCheckbox: LegacyFormCheckbox, FormCheckboxRow: LegacyFormCheckboxRow, FormCheckmark: LegacyFormCheckmark, FormDivider: LegacyFormDivider, FormHint: LegacyFormHint, FormIcon: LegacyFormIcon, FormInput: LegacyFormInput, FormLabel: LegacyFormLabel, FormRadio: LegacyFormRadio, FormRadioGroup: LegacyFormRadioGroup, FormRadioRow: LegacyFormRadioRow, FormRow: LegacyFormRow, FormSection: LegacyFormSection, FormSelect: LegacyFormSelect, FormSliderRow: LegacyFormSliderRow, FormSubLabel: LegacyFormSubLabel, FormSwitch: LegacyFormSwitch, FormSwitchRow: LegacyFormSwitchRow, FormTernaryCheckBox: LegacyFormTernaryCheckBox, FormText: LegacyFormText, FormTitle: LegacyFormTitle } = lazyDestructure(() => Forms));
      FlashList = findProp("FlashList");
    }
  });

  // src/metro/common/index.ts
  var common_exports = {};
  __export(common_exports, {
    Flux: () => Flux,
    FluxDispatcher: () => FluxDispatcher,
    FluxUtils: () => FluxUtils,
    NavigationNative: () => NavigationNative,
    React: () => React2,
    ReactNative: () => ReactNative,
    assets: () => assets,
    channels: () => channels,
    clipboard: () => clipboard,
    commands: () => commands,
    components: () => components_exports,
    constants: () => constants,
    i18n: () => i18n,
    invites: () => invites,
    messageUtil: () => messageUtil,
    navigation: () => navigation,
    navigationStack: () => navigationStack,
    semver: () => semver,
    toasts: () => toasts,
    tokens: () => tokens,
    url: () => url,
    useToken: () => useToken
  });
  var constants, channels, i18n, url, clipboard, assets, invites, commands, navigation, toasts, messageUtil, navigationStack, NavigationNative, semver, tokens, useToken, Flux, FluxDispatcher, FluxUtils, React2, ReactNative;
  var init_common = __esm({
    "src/metro/common/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_lazy();
      init_wrappers();
      init_components();
      constants = findByPropsLazy("Fonts", "Permissions");
      channels = findByPropsLazy("getVoiceChannelId");
      i18n = findByPropsLazy("Messages");
      url = findByPropsLazy("openURL", "openDeeplink");
      clipboard = findByPropsLazy("setString", "getString", "hasString");
      assets = findByPropsLazy("registerAsset");
      invites = findByPropsLazy("acceptInviteAndTransitionToInviteChannel");
      commands = findByPropsLazy("getBuiltInCommands");
      navigation = findByPropsLazy("pushLazy");
      toasts = findByFilePathLazy("modules/toast/native/ToastActionCreators.tsx", true);
      messageUtil = findByPropsLazy("sendBotMessage");
      navigationStack = findByPropsLazy("createStackNavigator");
      NavigationNative = findByPropsLazy("NavigationContainer");
      semver = findByPropsLazy("parse", "clean");
      tokens = findByPropsLazy("unsafe_rawColors", "colors");
      ({ useToken } = lazyDestructure(() => findByProps("useToken")));
      Flux = findByPropsLazy("connectStores");
      FluxDispatcher = findByProps("_interceptors");
      FluxUtils = findByProps("useStateFromStores");
      React2 = window.React = findByPropsLazy("createElement");
      ReactNative = window.ReactNative = findByPropsLazy("AppRegistry");
    }
  });

  // src/metro/index.ts
  var metro_exports = {};
  __export(metro_exports, {
    common: () => common_exports,
    factories: () => factories_exports,
    filters: () => filters_exports,
    findAllExports: () => findAllExports,
    findAllModule: () => findAllModule,
    findAllModuleId: () => findAllModuleId,
    findByDisplayName: () => findByDisplayName,
    findByDisplayNameAll: () => findByDisplayNameAll,
    findByDisplayNameLazy: () => findByDisplayNameLazy,
    findByFilePath: () => findByFilePath,
    findByFilePathLazy: () => findByFilePathLazy,
    findByName: () => findByName,
    findByNameAll: () => findByNameAll,
    findByNameLazy: () => findByNameLazy,
    findByProps: () => findByProps,
    findByPropsAll: () => findByPropsAll,
    findByPropsLazy: () => findByPropsLazy,
    findByStoreName: () => findByStoreName,
    findByStoreNameLazy: () => findByStoreNameLazy,
    findByTypeName: () => findByTypeName,
    findByTypeNameAll: () => findByTypeNameAll,
    findByTypeNameLazy: () => findByTypeNameLazy,
    findExports: () => findExports,
    findModule: () => findModule,
    findModuleId: () => findModuleId,
    lazy: () => lazy_exports2
  });
  var init_metro = __esm({
    "src/metro/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_common();
      init_factories();
      init_filters();
      init_finders();
      init_lazy2();
      init_wrappers();
    }
  });

  // globals:chroma-js
  var require_chroma_js = __commonJS({
    "globals:chroma-js"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["chroma-js"];
    }
  });

  // src/lib/addons/themes/colors/parser.ts
  function parseColorManifest(manifest) {
    var resolveType = (type2 = "dark") => (colorsPref.type ?? type2) === "dark" ? "darker" : "light";
    if (manifest.spec === 3) {
      var semanticColorDefinitions = {};
      for (var [semanticColorKey, semanticColorValue] of Object.entries(manifest.main.semantic ?? {})) {
        if (typeof semanticColorValue === "object") {
          var { type, value, opacity: semanticColorOpacity } = semanticColorValue;
          if (type === "raw") {
            semanticColorDefinitions[semanticColorKey] = {
              value,
              opacity: semanticColorOpacity ?? 1
            };
          } else {
            var rawColorValue = tokenRef.RawColor[value];
            semanticColorDefinitions[semanticColorKey] = {
              value: rawColorValue,
              opacity: semanticColorOpacity ?? 1
            };
          }
        } else if (typeof semanticColorValue === "string") {
          if (semanticColorValue.startsWith("#")) {
            semanticColorDefinitions[semanticColorKey] = {
              value: import_chroma_js.default.hex(semanticColorValue).hex(),
              opacity: 1
            };
          } else {
            semanticColorDefinitions[semanticColorKey] = {
              value: tokenRef.RawColor[semanticColorValue],
              opacity: 1
            };
          }
        } else {
          throw new Error(`Invalid semantic definitions: ${semanticColorValue}`);
        }
      }
      if (import_react_native2.Platform.OS === "android")
        applyAndroidAlphaKeys(manifest.main.raw);
      return {
        spec: 3,
        reference: resolveType(manifest.type),
        semantic: semanticColorDefinitions,
        raw: manifest.main.raw ?? {},
        background: manifest.main.background
      };
    }
    if (manifest.spec === 2) {
      var semanticDefinitions = {};
      var background = manifest.background ? {
        ...omit(manifest.background, [
          "alpha"
        ]),
        opacity: manifest.background.alpha
      } : void 0;
      if (manifest.semanticColors) {
        for (var key in manifest.semanticColors) {
          var values = manifest.semanticColors[key].map((c2) => c2 || void 0).slice(0, 2);
          if (!values[0])
            continue;
          semanticDefinitions[key] = {
            value: normalizeToHex(values[resolveType() === "light" ? 1 : 0]),
            opacity: 1
          };
        }
      }
      if (manifest.rawColors) {
        var draft = {};
        for (var key1 in manifest.rawColors) {
          var value1 = manifest.rawColors[key1];
          if (!value1)
            continue;
          draft[key1] = normalizeToHex(value1);
        }
        if (import_react_native2.Platform.OS === "android")
          applyAndroidAlphaKeys(draft);
        manifest.rawColors = draft;
      }
      return {
        spec: 2,
        reference: resolveType(),
        semantic: semanticDefinitions,
        raw: manifest.rawColors ?? {},
        background
      };
    }
    throw new Error("Invalid theme spec");
  }
  function applyAndroidAlphaKeys(rawColors2) {
    if (!rawColors2)
      return;
    var alphaMap = {
      "BLACK_ALPHA_60": [
        "BLACK",
        0.6
      ],
      "BRAND_NEW_360_ALPHA_20": [
        "BRAND_360",
        0.2
      ],
      "BRAND_NEW_360_ALPHA_25": [
        "BRAND_360",
        0.25
      ],
      "BRAND_NEW_500_ALPHA_20": [
        "BRAND_500",
        0.2
      ],
      "PRIMARY_DARK_500_ALPHA_20": [
        "PRIMARY_500",
        0.2
      ],
      "PRIMARY_DARK_700_ALPHA_60": [
        "PRIMARY_700",
        0.6
      ],
      "STATUS_GREEN_500_ALPHA_20": [
        "GREEN_500",
        0.2
      ],
      "STATUS_RED_500_ALPHA_20": [
        "RED_500",
        0.2
      ]
    };
    for (var key in alphaMap) {
      var [colorKey, alpha] = alphaMap[key];
      if (!rawColors2[colorKey])
        continue;
      rawColors2[key] = (0, import_chroma_js.default)(rawColors2[colorKey]).alpha(alpha).hex();
    }
    return rawColors2;
  }
  function normalizeToHex(colorString) {
    if (colorString === void 0)
      return void 0;
    if (import_chroma_js.default.valid(colorString))
      return (0, import_chroma_js.default)(colorString).hex();
    var color2 = Number((0, import_react_native2.processColor)(colorString));
    return import_chroma_js.default.rgb(
      color2 >> 16 & 255,
      color2 >> 8 & 255,
      color2 & 255,
      color2 >> 24 & 255
      // alpha
    ).hex();
  }
  var import_chroma_js, import_react_native2, tokenRef;
  var init_parser = __esm({
    "src/lib/addons/themes/colors/parser.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_metro();
      import_chroma_js = __toESM(require_chroma_js());
      init_dist();
      import_react_native2 = __toESM(require_react_native());
      init_preferences();
      tokenRef = findByProps("SemanticColor");
    }
  });

  // src/lib/addons/themes/colors/updater.ts
  function updateSChatColor(colorManifest, { update = true }) {
    if (settings.safeMode?.enabled)
      return;
    var internalDef = colorManifest ? parseColorManifest(colorManifest) : null;
    var ref = Object.assign(_colorRef, {
      current: internalDef,
      key: `bn-theme-${++_inc}`,
      lastSetDiscordTheme: !ThemeStore.theme.startsWith("bn-theme-") ? ThemeStore.theme : _colorRef.lastSetDiscordTheme
    });
    if (internalDef != null) {
      tokenRef2.Theme[ref.key.toUpperCase()] = ref.key;
      FormDivider.DIVIDER_COLORS[ref.key] = FormDivider.DIVIDER_COLORS[ref.current.reference];
      Object.keys(tokenRef2.Shadow).forEach((k) => tokenRef2.Shadow[k][ref.key] = tokenRef2.Shadow[k][ref.current.reference]);
      Object.keys(tokenRef2.SemanticColor).forEach((k) => {
        tokenRef2.SemanticColor[k][ref.key] = {
          ...tokenRef2.SemanticColor[k][ref.current.reference]
        };
      });
    }
    if (update) {
      AppearanceManager.setShouldSyncAppearanceSettings(false);
      AppearanceManager.updateTheme(internalDef != null ? ref.key : ref.lastSetDiscordTheme);
    }
  }
  var tokenRef2, origRawColor, AppearanceManager, ThemeStore, FormDivider, _inc, _colorRef;
  var init_updater = __esm({
    "src/lib/addons/themes/colors/updater.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_settings();
      init_metro();
      init_parser();
      tokenRef2 = findByProps("SemanticColor");
      origRawColor = {
        ...tokenRef2.RawColor
      };
      AppearanceManager = findByPropsLazy("updateTheme");
      ThemeStore = findByStoreNameLazy("ThemeStore");
      FormDivider = findByPropsLazy("DIVIDER_COLORS");
      _inc = 1;
      _colorRef = {
        current: null,
        key: `bn-theme-${_inc}`,
        origRaw: origRawColor,
        lastSetDiscordTheme: "darker"
      };
    }
  });

  // src/lib/addons/themes/colors/patches/background.tsx
  function ThemeBackground({ children }) {
    useObservable([
      colorsPref
    ]);
    if (!_colorRef.current || colorsPref.customBackground === "hidden" || !_colorRef.current.background?.url || _colorRef.current.background?.blur && typeof _colorRef.current.background?.blur !== "number") {
      return children;
    }
    return /* @__PURE__ */ jsx(import_react_native3.ImageBackground, {
      style: {
        flex: 1,
        height: "100%"
      },
      source: {
        uri: _colorRef.current.background?.url
      },
      blurRadius: _colorRef.current.background?.blur,
      children
    });
  }
  function patchChatBackground() {
    var patches2 = [
      after("render", Messages, (_2, ret) => {
        if (!_colorRef.current || !_colorRef.current.background?.url)
          return;
        var messagesComponent = findInReactTree(ret, (x2) => x2 && "HACK_fixModalInteraction" in x2.props && x2?.props?.style);
        if (messagesComponent) {
          var flattened = import_react_native3.StyleSheet.flatten(messagesComponent.props.style);
          var backgroundColor = (0, import_chroma_js2.default)(flattened.backgroundColor || "black").alpha(1 - (_colorRef.current.background?.opacity ?? 1)).hex();
          messagesComponent.props.style = import_react_native3.StyleSheet.flatten([
            messagesComponent.props.style,
            {
              backgroundColor
            }
          ]);
        }
        return /* @__PURE__ */ jsx(ThemeBackground, {
          children: ret
        });
      })
    ];
    return () => patches2.forEach((x2) => x2());
  }
  var import_chroma_js2, import_react_native3, Messages;
  var init_background = __esm({
    "src/lib/addons/themes/colors/patches/background.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_preferences();
      init_updater();
      init_patcher();
      init_storage2();
      init_utils();
      init_metro();
      import_chroma_js2 = __toESM(require_chroma_js());
      import_react_native3 = __toESM(require_react_native());
      Messages = findByFilePathLazy("components_native/chat/Messages.tsx", true);
    }
  });

  // src/lib/addons/themes/colors/patches/resolver.ts
  function patchDefinitionAndResolver() {
    var callback = ([theme]) => theme === _colorRef.key ? [
      _colorRef.current.reference
    ] : void 0;
    Object.keys(tokenReference.RawColor).forEach((key) => {
      Object.defineProperty(tokenReference.RawColor, key, {
        configurable: true,
        enumerable: true,
        get: () => {
          var ret = _colorRef.current?.raw[key];
          return ret || _colorRef.origRaw[key];
        }
      });
    });
    var unpatches = [
      before("isThemeDark", isThemeModule, callback),
      before("isThemeLight", isThemeModule, callback),
      before("updateTheme", NativeThemeModule, callback),
      instead("resolveSemanticColor", tokenReference.default.meta ?? tokenReference.default.internal, (args, orig) => {
        if (!_colorRef.current)
          return orig(...args);
        if (args[0] !== _colorRef.key)
          return orig(...args);
        args[0] = _colorRef.current.reference;
        var [name, colorDef] = extractInfo(_colorRef.current.reference, args[1]);
        var semanticDef = _colorRef.current.semantic[name];
        if (!semanticDef && _colorRef.current.spec === 2 && name in SEMANTIC_FALLBACK_MAP) {
          semanticDef = _colorRef.current.semantic[SEMANTIC_FALLBACK_MAP[name]];
        }
        if (semanticDef?.value) {
          if (semanticDef.opacity === 1)
            return semanticDef.value;
          return (0, import_chroma_js3.default)(semanticDef.value).alpha(semanticDef.opacity).hex();
        }
        var rawValue = _colorRef.current.raw[colorDef.raw];
        if (rawValue) {
          return colorDef.opacity === 1 ? rawValue : (0, import_chroma_js3.default)(rawValue).alpha(colorDef.opacity).hex();
        }
        return orig(...args);
      }),
      () => {
        Object.defineProperty(tokenReference, "RawColor", {
          configurable: true,
          writable: true,
          value: _colorRef.origRaw
        });
      }
    ];
    return () => unpatches.forEach((p) => p());
  }
  function extractInfo(themeName, colorObj) {
    var propName = colorObj[extractInfo._sym ??= Object.getOwnPropertySymbols(colorObj)[0]];
    var colorDef = tokenReference.SemanticColor[propName];
    return [
      propName,
      colorDef[themeName]
    ];
  }
  var import_chroma_js3, tokenReference, isThemeModule, SEMANTIC_FALLBACK_MAP;
  var init_resolver = __esm({
    "src/lib/addons/themes/colors/patches/resolver.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_updater();
      init_modules();
      init_patcher();
      init_metro();
      init_filters();
      init_lazy2();
      import_chroma_js3 = __toESM(require_chroma_js());
      tokenReference = findByProps("SemanticColor");
      isThemeModule = createLazyModule(byMutableProp("isThemeDark"));
      SEMANTIC_FALLBACK_MAP = {
        "BG_BACKDROP": "BACKGROUND_FLOATING",
        "BG_BASE_PRIMARY": "BACKGROUND_PRIMARY",
        "BG_BASE_SECONDARY": "BACKGROUND_SECONDARY",
        "BG_BASE_TERTIARY": "BACKGROUND_SECONDARY_ALT",
        "BG_MOD_FAINT": "BACKGROUND_MODIFIER_ACCENT",
        "BG_MOD_STRONG": "BACKGROUND_MODIFIER_ACCENT",
        "BG_MOD_SUBTLE": "BACKGROUND_MODIFIER_ACCENT",
        "BG_SURFACE_OVERLAY": "BACKGROUND_FLOATING",
        "BG_SURFACE_OVERLAY_TMP": "BACKGROUND_FLOATING",
        "BG_SURFACE_RAISED": "BACKGROUND_MOBILE_PRIMARY"
      };
    }
  });

  // src/lib/addons/themes/colors/patches/storage.ts
  function patchStorage() {
    var patchedKeys = /* @__PURE__ */ new Set([
      "ThemeStore",
      "SelectivelySyncedUserSettingsStore"
    ]);
    var patches2 = [
      after("get", mmkvStorage, ([key], ret) => {
        if (!_colorRef.current || !patchedKeys.has(key))
          return;
        var state = findInTree(ret._state, (s) => typeof s.theme === "string");
        if (state)
          state.theme = _colorRef.key;
      }),
      before("set", mmkvStorage, ([key, value]) => {
        if (!patchedKeys.has(key))
          return;
        var json = JSON.stringify(value);
        var lastSetDiscordTheme = _colorRef.lastSetDiscordTheme ?? "darker";
        var replaced = json.replace(/"theme":"bn-theme-\d+"/, `"theme":${JSON.stringify(lastSetDiscordTheme)}`);
        return [
          key,
          JSON.parse(replaced)
        ];
      })
    ];
    return () => patches2.forEach((p) => p());
  }
  var mmkvStorage;
  var init_storage3 = __esm({
    "src/lib/addons/themes/colors/patches/storage.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_updater();
      init_patcher();
      init_utils();
      init_lazy();
      init_metro();
      mmkvStorage = proxyLazy(() => {
        var newModule = findByProps("impl");
        if (typeof newModule?.impl === "object")
          return newModule.impl;
        return findByProps("storage");
      });
    }
  });

  // src/lib/addons/themes/colors/index.ts
  function initColors(manifest) {
    var patches2 = [
      patchStorage(),
      patchDefinitionAndResolver(),
      patchChatBackground()
    ];
    if (manifest)
      updateSChatColor(manifest, {
        update: false
      });
    return () => patches2.forEach((p) => p());
  }
  var init_colors = __esm({
    "src/lib/addons/themes/colors/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_background();
      init_resolver();
      init_storage3();
      init_updater();
    }
  });

  // src/lib/addons/themes/index.ts
  var themes_exports = {};
  __export(themes_exports, {
    fetchTheme: () => fetchTheme,
    getCurrentTheme: () => getCurrentTheme,
    getThemeFromLoader: () => getThemeFromLoader,
    initThemes: () => initThemes,
    installTheme: () => installTheme,
    removeTheme: () => removeTheme,
    selectTheme: () => selectTheme,
    themes: () => themes,
    updateThemes: () => updateThemes,
    writeThemeToNative: () => writeThemeToNative
  });
  function writeThemeToNative(theme) {
    return _writeThemeToNative.apply(this, arguments);
  }
  function _writeThemeToNative() {
    _writeThemeToNative = _async_to_generator(function* (theme) {
      if (typeof theme !== "object")
        throw new Error("Theme must be an object");
      yield createFileBackend(getThemeFilePath() || "theme.json").set(theme);
    });
    return _writeThemeToNative.apply(this, arguments);
  }
  function processData(data) {
    if (data.semanticColors) {
      var { semanticColors: semanticColors2 } = data;
      for (var key in semanticColors2) {
        for (var index in semanticColors2[key]) {
          semanticColors2[key][index] &&= normalizeToHex(semanticColors2[key][index]) || false;
        }
      }
    }
    if (data.rawColors) {
      var { rawColors: rawColors2 } = data;
      for (var key1 in rawColors2) {
        var normalized = normalizeToHex(rawColors2[key1]);
        if (normalized)
          data.rawColors[key1] = normalized;
      }
      if (import_react_native4.Platform.OS === "android")
        applyAndroidAlphaKeys(rawColors2);
    }
    data.spec ??= 2;
    return data;
  }
  function validateTheme(themeJSON) {
    if (typeof themeJSON !== "object" || themeJSON === null)
      return false;
    if (themeJSON.spec !== 2 && themeJSON.spec !== 3)
      return false;
    if (themeJSON.spec === 3 && !themeJSON.main)
      return false;
    return true;
  }
  function fetchTheme(url2) {
    return _fetchTheme.apply(this, arguments);
  }
  function _fetchTheme() {
    _fetchTheme = _async_to_generator(function* (url2, selected = false) {
      var themeJSON;
      try {
        themeJSON = yield (yield safeFetch(url2, {
          cache: "no-store"
        })).json();
      } catch (e) {
        throw new Error(`Failed to fetch theme at ${url2}`);
      }
      if (!validateTheme(themeJSON))
        throw new Error(`Invalid theme at ${url2}`);
      themes[url2] = {
        id: url2,
        selected,
        data: processData(themeJSON)
      };
      if (selected) {
        writeThemeToNative(themes[url2]);
        updateSChatColor(themes[url2].data, {
          update: true
        });
      }
    });
    return _fetchTheme.apply(this, arguments);
  }
  function installTheme(url2) {
    return _installTheme.apply(this, arguments);
  }
  function _installTheme() {
    _installTheme = _async_to_generator(function* (url2) {
      if (typeof url2 !== "string" || url2 in themes)
        throw new Error("Theme already installed");
      yield fetchTheme(url2);
    });
    return _installTheme.apply(this, arguments);
  }
  function selectTheme(theme, write = true) {
    if (theme)
      theme.selected = true;
    Object.keys(themes).forEach((k) => themes[k].selected = themes[k].id === theme?.id);
    if (theme == null && write) {
      updateSChatColor(null, {
        update: true
      });
      return writeThemeToNative({});
    } else if (theme) {
      updateSChatColor(theme.data, {
        update: true
      });
      return writeThemeToNative(theme);
    }
  }
  function removeTheme(id) {
    return _removeTheme.apply(this, arguments);
  }
  function _removeTheme() {
    _removeTheme = _async_to_generator(function* (id) {
      var theme = themes[id];
      if (theme.selected)
        yield selectTheme(null);
      delete themes[id];
      return theme.selected;
    });
    return _removeTheme.apply(this, arguments);
  }
  function updateThemes() {
    return _updateThemes.apply(this, arguments);
  }
  function _updateThemes() {
    _updateThemes = _async_to_generator(function* () {
      yield awaitStorage(themes);
      var currentTheme = getThemeFromLoader();
      yield allSettled(Object.keys(themes).map((id) => fetchTheme(id, currentTheme?.id === id)));
    });
    return _updateThemes.apply(this, arguments);
  }
  function getCurrentTheme() {
    return Object.values(themes).find((t) => t.selected) ?? null;
  }
  function getThemeFromLoader() {
    return getStoredTheme();
  }
  function initThemes() {
    return _initThemes.apply(this, arguments);
  }
  function _initThemes() {
    _initThemes = _async_to_generator(function* () {
      if (!isThemeSupported())
        return;
      try {
        if (isPyonLoader()) {
          writeFile("../vendetta_theme.json", "null");
        }
        yield awaitStorage2(colorsPref);
        var currentTheme = getThemeFromLoader();
        initColors(currentTheme?.data ?? null);
        updateThemes().catch((e) => console.error("Failed to update themes", e));
      } catch (e) {
        console.error("Failed to initialize themes", e);
      }
    });
    return _initThemes.apply(this, arguments);
  }
  var import_react_native4, themes;
  var init_themes = __esm({
    "src/lib/addons/themes/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_storage();
      init_fs();
      init_loader();
      init_storage2();
      init_utils();
      import_react_native4 = __toESM(require_react_native());
      init_colors();
      init_parser();
      init_preferences();
      init_updater();
      themes = wrapSync(createStorage(createMMKVBackend("VENDETTA_THEMES")));
    }
  });

  // src/lib/api/native/loader.ts
  function isVendettaLoader() {
    return vendettaLoaderIdentity != null;
  }
  function isPyonLoader() {
    return pyonLoaderIdentity != null;
  }
  function polyfillVendettaLoaderIdentity() {
    if (!isPyonLoader() || isVendettaLoader())
      return null;
    var loader = {
      name: pyonLoaderIdentity.loaderName,
      features: {}
    };
    if (isLoaderConfigSupported())
      loader.features.loaderConfig = true;
    if (isSysColorsSupported()) {
      loader.features.syscolors = {
        prop: "__vendetta_syscolors"
      };
      Object.defineProperty(globalThis, "__vendetta_syscolors", {
        get: () => getSysColors(),
        configurable: true
      });
    }
    if (isThemeSupported()) {
      loader.features.themes = {
        prop: "__vendetta_theme"
      };
      Object.defineProperty(globalThis, "__vendetta_theme", {
        // get: () => getStoredTheme(),
        get: () => {
          var id = getStoredTheme()?.id;
          if (!id)
            return null;
          var { themes: themes2 } = (init_themes(), __toCommonJS(themes_exports));
          return themes2[id] ?? getStoredTheme() ?? null;
        },
        configurable: true
      });
    }
    Object.defineProperty(globalThis, "__vendetta_loader", {
      get: () => loader,
      configurable: true
    });
    return loader;
  }
  function getVendettaLoaderIdentity() {
    if (globalThis.__vendetta_loader)
      return globalThis.__vendetta_loader;
    return polyfillVendettaLoaderIdentity();
  }
  function getLoaderName() {
    if (isPyonLoader())
      return pyonLoaderIdentity.loaderName;
    else if (isVendettaLoader())
      return vendettaLoaderIdentity.name;
    return "Unknown";
  }
  function getLoaderVersion() {
    if (isPyonLoader())
      return pyonLoaderIdentity.loaderVersion;
    return null;
  }
  function isLoaderConfigSupported() {
    if (isPyonLoader()) {
      return true;
    } else if (isVendettaLoader()) {
      return vendettaLoaderIdentity.features.loaderConfig;
    }
    return false;
  }
  function isThemeSupported() {
    if (isPyonLoader()) {
      return pyonLoaderIdentity.hasThemeSupport;
    } else if (isVendettaLoader()) {
      return vendettaLoaderIdentity.features.themes != null;
    }
    return false;
  }
  function getStoredTheme() {
    if (isPyonLoader()) {
      return pyonLoaderIdentity.storedTheme;
    } else if (isVendettaLoader()) {
      var themeProp = vendettaLoaderIdentity.features.themes?.prop;
      if (!themeProp)
        return null;
      return globalThis[themeProp] || null;
    }
    return null;
  }
  function getThemeFilePath() {
    if (isPyonLoader()) {
      return "schat/current-theme.json";
    } else if (isVendettaLoader()) {
      return "vendetta_theme.json";
    }
    return null;
  }
  function isReactDevToolsPreloaded() {
    if (isPyonLoader()) {
      return Boolean(window.__reactDevTools);
    }
    if (isVendettaLoader()) {
      return vendettaLoaderIdentity.features.devtools != null;
    }
    return false;
  }
  function getReactDevToolsProp() {
    if (!isReactDevToolsPreloaded())
      return null;
    if (isPyonLoader()) {
      window.__schat_rdt = window.__reactDevTools.exports;
      return "__schat_rdt";
    }
    if (isVendettaLoader()) {
      return vendettaLoaderIdentity.features.devtools.prop;
    }
    return null;
  }
  function getReactDevToolsVersion() {
    if (!isReactDevToolsPreloaded())
      return null;
    if (isPyonLoader()) {
      return window.__reactDevTools.version || null;
    }
    if (isVendettaLoader()) {
      return vendettaLoaderIdentity.features.devtools.version;
    }
    return null;
  }
  function isSysColorsSupported() {
    if (isPyonLoader())
      return pyonLoaderIdentity.isSysColorsSupported;
    else if (isVendettaLoader()) {
      return vendettaLoaderIdentity.features.syscolors != null;
    }
    return false;
  }
  function getSysColors() {
    if (!isSysColorsSupported())
      return null;
    if (isPyonLoader()) {
      return pyonLoaderIdentity.sysColors;
    } else if (isVendettaLoader()) {
      return vendettaLoaderIdentity.features.syscolors.prop;
    }
    return null;
  }
  function getLoaderConfigPath() {
    if (isPyonLoader()) {
      return "schat/loader.json";
    } else if (isVendettaLoader()) {
      return "vendetta_loader.json";
    }
    return "loader.json";
  }
  function isFontSupported() {
    if (isPyonLoader())
      return pyonLoaderIdentity.fontPatch === 2;
    return false;
  }
  var pyonLoaderIdentity, vendettaLoaderIdentity;
  var init_loader = __esm({
    "src/lib/api/native/loader.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      pyonLoaderIdentity = globalThis.__PYON_LOADER__;
      vendettaLoaderIdentity = globalThis.__vendetta_loader;
      getVendettaLoaderIdentity();
    }
  });

  // src/lib/api/settings.ts
  var settings_exports = {};
  __export(settings_exports, {
    loaderConfig: () => loaderConfig,
    settings: () => settings
  });
  var settings, loaderConfig;
  var init_settings = __esm({
    "src/lib/api/settings.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_storage();
      init_loader();
      settings = wrapSync(createStorage(createMMKVBackend("VENDETTA_SETTINGS")));
      loaderConfig = wrapSync(createStorage(createFileBackend(getLoaderConfigPath(), {
        customLoadUrl: {
          enabled: false,
          url: "http://localhost:4040/schat.js"
        }
      })));
    }
  });

  // src/metro/polyfills/redesign.ts
  var redesign_exports = {};
  __export(redesign_exports, {
    default: () => redesign_default
  });
  var redesignProps, _module, _source, cacher, actualExports, exportsKeysLength, prop, id, moduleExports, redesign_default;
  var init_redesign = __esm({
    "src/metro/polyfills/redesign.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_caches();
      redesignProps = /* @__PURE__ */ new Set([
        "AlertActionButton",
        "AlertModal",
        "AlertModalContainer",
        "AvatarDuoPile",
        "AvatarPile",
        "BACKDROP_OPAQUE_MAX_OPACITY",
        "Backdrop",
        "Button",
        "Card",
        "ContextMenu",
        "ContextMenuContainer",
        "FauxHeader",
        "FloatingActionButton",
        "GhostInput",
        "GuildIconPile",
        "HeaderActionButton",
        "HeaderButton",
        "HeaderSubmittingIndicator",
        "IconButton",
        "Input",
        "InputButton",
        "InputContainer",
        "LayerContext",
        "LayerScope",
        "Modal",
        "ModalActionButton",
        "ModalContent",
        "ModalDisclaimer",
        "ModalFloatingAction",
        "ModalFloatingActionSpacer",
        "ModalFooter",
        "ModalScreen",
        "ModalStepIndicator",
        "NAV_BAR_HEIGHT",
        "NAV_BAR_HEIGHT_MULTILINE",
        "Navigator",
        "NavigatorHeader",
        "NavigatorScreen",
        "Pile",
        "PileOverflow",
        "RedesignCompat",
        "RedesignCompatContext",
        "RowButton",
        "STATUS_BAR_HEIGHT",
        "SceneLoadingIndicator",
        "SearchField",
        "SegmentedControl",
        "SegmentedControlPages",
        "Slider",
        "Stack",
        "StepModal",
        "StickyContext",
        "StickyHeader",
        "StickyWrapper",
        "TABLE_ROW_CONTENT_HEIGHT",
        "TABLE_ROW_HEIGHT",
        "TableCheckboxRow",
        "TableRadioGroup",
        "TableRadioRow",
        "TableRow",
        "TableRowGroup",
        "TableRowGroupTitle",
        "TableRowIcon",
        "TableSwitchRow",
        "Tabs",
        "TextArea",
        "TextField",
        "TextInput",
        "Toast",
        "dismissAlerts",
        "getHeaderBackButton",
        "getHeaderCloseButton",
        "getHeaderConditionalBackButton",
        "getHeaderNoTitle",
        "getHeaderTextButton",
        "hideContextMenu",
        "navigatorShouldCrossfade",
        "openAlert",
        "useAccessibilityNativeStackOptions",
        "useAndroidNavScrim",
        "useCoachmark",
        "useFloatingActionButtonScroll",
        "useFloatingActionButtonState",
        "useNativeStackNavigation",
        "useNavigation",
        "useNavigationTheme",
        "useNavigatorBackPressHandler",
        "useNavigatorScreens",
        "useNavigatorShouldCrossfade",
        "useSegmentedControlState",
        "useStackNavigation",
        "useTabNavigation",
        "useTooltip"
      ]);
      _module = {};
      _source = {};
      cacher = getPolyfillModuleCacher("redesign_module");
      for ([id, moduleExports] of cacher.getModules()) {
        for (prop of redesignProps) {
          actualExports = void 0;
          if (moduleExports[prop]) {
            actualExports = moduleExports;
          } else if (moduleExports.default?.[prop]) {
            actualExports = moduleExports.default;
          } else {
            continue;
          }
          exportsKeysLength = Reflect.ownKeys(actualExports).length;
          if (_source[prop] && exportsKeysLength >= _source[prop]) {
            continue;
          }
          _module[prop] = actualExports[prop];
          _source[prop] = Reflect.ownKeys(actualExports).length;
          cacher.cacheId(id);
          if (exportsKeysLength === 1) {
            redesignProps.delete(prop);
          }
        }
      }
      cacher.finish();
      redesign_default = _module;
    }
  });

  // src/metro/internals/modules.ts
  var modules_exports2 = {};
  __export(modules_exports2, {
    getCachedPolyfillModules: () => getCachedPolyfillModules,
    getImportingModuleId: () => getImportingModuleId,
    getModules: () => getModules,
    metroModules: () => metroModules,
    requireModule: () => requireModule,
    subscribeModule: () => subscribeModule
  });
  function blacklistModule(id) {
    Object.defineProperty(metroModules, id, {
      enumerable: false
    });
    blacklistedIds.add(id);
    indexBlacklistFlag(Number(id));
  }
  function isBadExports(exports) {
    return !exports || exports === window || exports["<!@ pylix was here :fuyusquish: !@>"] === null || exports.__proto__ === Object.prototype && Reflect.ownKeys(exports).length === 0 || exports.default?.[Symbol.toStringTag] === "IntlMessagesProxy";
  }
  function onModuleRequire(moduleExports, id) {
    indexExportsFlags(id, moduleExports);
    moduleExports.initSentry &&= () => void 0;
    if (moduleExports.default?.track && moduleExports.default.trackMaker)
      moduleExports.default.track = () => Promise.resolve();
    if (moduleExports.registerAsset) {
      (init_patches(), __toCommonJS(patches_exports)).patchAssets(moduleExports);
    }
    if (!patchedNativeComponentRegistry && [
      "customBubblingEventTypes",
      "customDirectEventTypes",
      "register",
      "get"
    ].every((x2) => moduleExports[x2])) {
      instead2("register", moduleExports, ([name, cb], origFunc) => {
        try {
          return origFunc(name, cb);
        } catch (e) {
          return name;
        }
      });
      patchedNativeComponentRegistry = true;
    }
    if (moduleExports?.default?.constructor?.displayName === "DeveloperExperimentStore") {
      moduleExports.default = new Proxy(moduleExports.default, {
        get(target, property, receiver) {
          if (property === "isDeveloper") {
            var { settings: settings2 } = (init_settings(), __toCommonJS(settings_exports));
            return settings2.enableDiscordDeveloperSettings ?? false;
          }
          return Reflect.get(target, property, receiver);
        }
      });
    }
    if (!patchedImportTracker && moduleExports.fileFinishedImporting) {
      before2("fileFinishedImporting", moduleExports, ([filePath]) => {
        if (_importingModuleId === -1 || !filePath)
          return;
        metroModules[_importingModuleId].__filePath = filePath;
      });
      patchedImportTracker = true;
    }
    if (!patchedInspectSource && window["__core-js_shared__"]) {
      var inspect = (f) => typeof f === "function" && functionToString.apply(f, []);
      window["__core-js_shared__"].inspectSource = inspect;
      patchedInspectSource = true;
    }
    if (moduleExports.findHostInstance_DEPRECATED) {
      var prevExports = metroModules[id - 1]?.publicModule.exports;
      var inc = prevExports.default?.reactProfilingEnabled ? 1 : -1;
      if (!metroModules[id + inc]?.isInitialized) {
        blacklistModule(id + inc);
      }
    }
    if (moduleExports.isMoment) {
      instead2("defineLocale", moduleExports, (args, orig) => {
        var origLocale = moduleExports.locale();
        orig(...args);
        moduleExports.locale(origLocale);
      });
    }
    var subs = moduleSubscriptions.get(Number(id));
    if (subs) {
      subs.forEach((s) => s());
      moduleSubscriptions.delete(Number(id));
    }
  }
  function getImportingModuleId() {
    return _importingModuleId;
  }
  function subscribeModule(id, cb) {
    var subs = moduleSubscriptions.get(id) ?? /* @__PURE__ */ new Set();
    subs.add(cb);
    moduleSubscriptions.set(id, subs);
    return () => subs.delete(cb);
  }
  function requireModule(id) {
    if (!metroModules[0]?.isInitialized)
      metroRequire(0);
    if (blacklistedIds.has(id))
      return void 0;
    if (Number(id) === -1)
      return init_redesign(), __toCommonJS(redesign_exports);
    if (metroModules[id]?.isInitialized && !metroModules[id]?.hasError) {
      return metroRequire(id);
    }
    var originalHandler = ErrorUtils.getGlobalHandler();
    ErrorUtils.setGlobalHandler(noopHandler);
    var moduleExports;
    try {
      moduleExports = metroRequire(id);
    } catch (e) {
      blacklistModule(id);
      moduleExports = void 0;
    }
    ErrorUtils.setGlobalHandler(originalHandler);
    return moduleExports;
  }
  function* getModules(uniq, all = false) {
    yield [
      -1,
      (init_redesign(), __toCommonJS(redesign_exports))
    ];
    var cache = getMetroCache().findIndex[uniq];
    if (all && !cache?.[`_${ModulesMapInternal.FULL_LOOKUP}`])
      cache = void 0;
    if (cache?.[`_${ModulesMapInternal.NOT_FOUND}`])
      return;
    for (var id in cache) {
      if (id[0] === "_")
        continue;
      var exports = requireModule(Number(id));
      if (isBadExports(exports))
        continue;
      yield [
        id,
        exports
      ];
    }
    for (var id1 in metroModules) {
      var exports1 = requireModule(Number(id1));
      if (isBadExports(exports1))
        continue;
      yield [
        id1,
        exports1
      ];
    }
  }
  function* getCachedPolyfillModules(name) {
    var cache = getMetroCache().polyfillIndex[name];
    for (var id in cache) {
      var exports = requireModule(Number(id));
      if (isBadExports(exports))
        continue;
      yield [
        id,
        exports
      ];
    }
    if (!cache[`_${ModulesMapInternal.FULL_LOOKUP}`]) {
      for (var id1 in metroModules) {
        var exports1 = requireModule(Number(id1));
        if (isBadExports(exports1))
          continue;
        yield [
          id1,
          exports1
        ];
      }
    }
  }
  var _loop, before2, instead2, metroModules, metroRequire, moduleSubscriptions, blacklistedIds, noopHandler, functionToString, patchedInspectSource, patchedImportTracker, patchedNativeComponentRegistry, _importingModuleId, key;
  var init_modules2 = __esm({
    "src/metro/internals/modules.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_caches();
      init_enums();
      _loop = function(key) {
        var id = Number(key);
        var metroModule = metroModules[id];
        var cache = getMetroCache().flagsIndex[id];
        if (cache & ModuleFlags.BLACKLISTED) {
          blacklistModule(id);
          return "continue";
        }
        if (metroModule.factory) {
          instead2("factory", metroModule, (args, origFunc) => {
            var originalImportingId = _importingModuleId;
            _importingModuleId = id;
            var { 1: metroRequire2, 4: moduleObject } = args;
            args[
              2
              /* metroImportDefault */
            ] = (id2) => {
              var exps = metroRequire2(id2);
              return exps && exps.__esModule ? exps.default : exps;
            };
            args[
              3
              /* metroImportAll */
            ] = (id2) => {
              var exps = metroRequire2(id2);
              if (exps && exps.__esModule)
                return exps;
              var importAll = {};
              if (exps)
                Object.assign(importAll, exps);
              importAll.default = exps;
              return importAll;
            };
            origFunc(...args);
            if (!isBadExports(moduleObject.exports)) {
              onModuleRequire(moduleObject.exports, id);
            } else {
              blacklistModule(id);
            }
            _importingModuleId = originalImportingId;
          });
        }
      };
      ({ before: before2, instead: instead2 } = require_cjs());
      metroModules = window.modules;
      metroRequire = (id) => window.__r(+id);
      moduleSubscriptions = /* @__PURE__ */ new Map();
      blacklistedIds = /* @__PURE__ */ new Set();
      noopHandler = () => void 0;
      functionToString = Function.prototype.toString;
      patchedInspectSource = false;
      patchedImportTracker = false;
      patchedNativeComponentRegistry = false;
      _importingModuleId = -1;
      for (key in metroModules)
        _loop(key);
    }
  });

  // src/metro/internals/caches.ts
  var caches_exports = {};
  __export(caches_exports, {
    getCacherForUniq: () => getCacherForUniq,
    getMetroCache: () => getMetroCache,
    getPolyfillModuleCacher: () => getPolyfillModuleCacher,
    indexAssetModuleFlag: () => indexAssetModuleFlag,
    indexBlacklistFlag: () => indexBlacklistFlag,
    indexExportsFlags: () => indexExportsFlags,
    initMetroCache: () => initMetroCache
  });
  function buildInitCache() {
    var cache = {
      _v: CACHE_VERSION,
      _buildNumber: NativeClientInfoModule.Build,
      _modulesCount: Object.keys(window.modules).length,
      flagsIndex: {},
      findIndex: {},
      polyfillIndex: {}
    };
    setTimeout(() => {
      for (var id in window.modules) {
        (init_modules2(), __toCommonJS(modules_exports2)).requireModule(id);
      }
    }, 100);
    _metroCache = cache;
    return cache;
  }
  function initMetroCache() {
    return _initMetroCache.apply(this, arguments);
  }
  function _initMetroCache() {
    _initMetroCache = _async_to_generator(function* () {
      if (!(yield fileExists(SCHAT_METRO_CACHE_PATH)))
        return void buildInitCache();
      var rawCache = yield readFile(SCHAT_METRO_CACHE_PATH);
      try {
        _metroCache = JSON.parse(rawCache);
        if (_metroCache._v !== CACHE_VERSION) {
          _metroCache = null;
          throw "cache invalidated; cache version outdated";
        }
        if (_metroCache._buildNumber !== NativeClientInfoModule.Build) {
          _metroCache = null;
          throw "cache invalidated; version mismatch";
        }
        if (_metroCache._modulesCount !== Object.keys(window.modules).length) {
          _metroCache = null;
          throw "cache invalidated; modules count mismatch";
        }
      } catch (e) {
        buildInitCache();
      }
    });
    return _initMetroCache.apply(this, arguments);
  }
  function extractExportsFlags(moduleExports) {
    if (!moduleExports)
      return void 0;
    var bit = ModuleFlags.EXISTS;
    return bit;
  }
  function indexExportsFlags(moduleId, moduleExports) {
    var flags = extractExportsFlags(moduleExports);
    if (flags && flags !== ModuleFlags.EXISTS) {
      _metroCache.flagsIndex[moduleId] = flags;
    }
  }
  function indexBlacklistFlag(id) {
    _metroCache.flagsIndex[id] |= ModuleFlags.BLACKLISTED;
  }
  function indexAssetModuleFlag(id) {
    _metroCache.flagsIndex[id] |= ModuleFlags.ASSET;
  }
  function getCacherForUniq(uniq, allFind) {
    var indexObject = _metroCache.findIndex[uniq] ??= {};
    return {
      cacheId(moduleId, exports) {
        indexObject[moduleId] ??= extractExportsFlags(exports);
        saveCache();
      },
      // Finish may not be called by single find
      finish(notFound) {
        if (allFind)
          indexObject[`_${ModulesMapInternal.FULL_LOOKUP}`] = 1;
        if (notFound)
          indexObject[`_${ModulesMapInternal.NOT_FOUND}`] = 1;
        saveCache();
      }
    };
  }
  function getPolyfillModuleCacher(name) {
    var indexObject = _metroCache.polyfillIndex[name] ??= {};
    return {
      getModules() {
        return (init_modules2(), __toCommonJS(modules_exports2)).getCachedPolyfillModules(name);
      },
      cacheId(moduleId) {
        indexObject[moduleId] = 1;
        saveCache();
      },
      finish() {
        indexObject[`_${ModulesMapInternal.FULL_LOOKUP}`] = 1;
        saveCache();
      }
    };
  }
  var CACHE_VERSION, SCHAT_METRO_CACHE_PATH, _metroCache, getMetroCache, saveCache;
  var init_caches = __esm({
    "src/metro/internals/caches.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_fs();
      init_modules();
      init_dist();
      init_enums();
      CACHE_VERSION = 102;
      SCHAT_METRO_CACHE_PATH = "caches/metro_modules.json";
      _metroCache = null;
      getMetroCache = () => _metroCache;
      saveCache = debounce(() => {
        writeFile(SCHAT_METRO_CACHE_PATH, JSON.stringify(_metroCache));
      }, 1e3);
    }
  });

  // src/core/ui/reporter/utils/isStack.tsx
  function isComponentStack(error) {
    return "componentStack" in error && typeof error.componentStack === "string";
  }
  function hasStack(error) {
    return !!error.stack;
  }
  var init_isStack = __esm({
    "src/core/ui/reporter/utils/isStack.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/lib/api/assets/index.ts
  var assets_exports = {};
  __export(assets_exports, {
    filterAssets: () => filterAssets,
    findAsset: () => findAsset,
    findAssetId: () => findAssetId,
    iterateAssets: () => iterateAssets
  });
  function* iterateAssets() {
    var { flagsIndex } = getMetroCache();
    var yielded = /* @__PURE__ */ new Set();
    for (var id in flagsIndex) {
      if (flagsIndex[id] & ModuleFlags.ASSET) {
        var assetId = requireModule(Number(id));
        if (typeof assetId !== "number" || yielded.has(assetId))
          continue;
        yield getAssetById(assetId);
        yielded.add(assetId);
      }
    }
  }
  function getAssetById(id) {
    var asset = assetsModule.getAssetByID(id);
    if (!asset)
      return asset;
    return Object.assign(asset, {
      id
    });
  }
  function findAsset(param) {
    if (typeof param === "number")
      return getAssetById(param);
    if (typeof param === "string" && _nameToAssetCache[param]) {
      return _nameToAssetCache[param];
    }
    for (var asset of iterateAssets()) {
      if (typeof param === "string" && asset.name === param) {
        _nameToAssetCache[param] = asset;
        return asset;
      } else if (typeof param === "function" && param(asset)) {
        return asset;
      }
    }
  }
  function filterAssets(param) {
    var filteredAssets = [];
    for (var asset of iterateAssets()) {
      if (typeof param === "string" ? asset.name === param : param(asset)) {
        filteredAssets.push(asset);
      }
    }
    return filteredAssets;
  }
  function findAssetId(name) {
    return findAsset(name)?.id;
  }
  var _nameToAssetCache;
  var init_assets = __esm({
    "src/lib/api/assets/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_caches();
      init_enums();
      init_modules2();
      init_patches();
      _nameToAssetCache = {};
    }
  });

  // src/core/i18n/default.json
  var default_default;
  var init_default = __esm({
    "src/core/i18n/default.json"() {
      default_default = {
        ABOUT: "About",
        ACTIONS: "Actions",
        ARE_YOU_SURE_TO_CLEAR_DATA: "Are you sure you wish to clear the data of {name}?",
        ARE_YOU_SURE_TO_DELETE_PLUGIN: "Are you sure you wish to delete {name}? This will clear all of the plugin's data.",
        ARE_YOU_SURE_TO_DELETE_THEME: "Are you sure you wish to delete {name}?",
        ASSET_BROWSER: "Asset Browser",
        BRAND: "Brand",
        SCHAT: "SChat",
        SCHAT_URL: "SChat URL",
        BYTECODE: "Bytecode",
        CANCEL: "Cancel",
        CLEAR: "Clear",
        CLEAR_DATA: "Clear data",
        CLEAR_DATA_FAILED: "Failed to clear data for {name}!",
        CLEAR_DATA_SUCCESSFUL: "Cleared data for {name}.",
        CODENAME: "Codename",
        COMMAND_DEBUG_DESC: "Send SChat debug info.",
        COMMAND_DEBUG_OPT_EPHEMERALLY: "Send debug info ephemerally.",
        COMMAND_EVAL_DESC: "Evaluate JavaScript code.",
        COMMAND_EVAL_OPT_ASYNC: "Whether to support 'await' in code. Must explicitly return for result (default: false)",
        COMMAND_EVAL_OPT_CODE: "The code to evaluate.",
        COMMAND_PLUGINS_DESC: "Send list of installed plugins.",
        COMMAND_PLUGINS_OPT_EPHEMERALLY: "Send plugins list ephemerally.",
        COMPONENT: "Component",
        CONFIRMATION_LINK_IS_A_TYPE: "This link is a **{urlType, select, plugin {Plugin} theme {Theme} other {Add-on}}**, would you like to install it?",
        CONNECT_TO_DEBUG_WEBSOCKET: "Connect to debug websocket",
        CONNECT_TO_REACT_DEVTOOLS: "Connect to React DevTools",
        CONTINUE: "Continue",
        COPIED_TO_CLIPBOARD: "Copied to clipboard",
        COPY_URL: "Copy URL",
        DEBUG: "Debug",
        DEBUGGER_URL: "Debugger URL",
        DELETE: "Delete",
        DESC_EXTRACT_FONTS_FROM_THEME: 'Looks out for "fonts" field in your currently applied theme and install it.',
        DEVELOPER: "Developer",
        DEVELOPER_SETTINGS: "Developer Settings",
        DISABLE_THEME: "Disable Theme",
        DISABLE_UPDATES: "Disable updates",
        DISCORD_SERVER: "Discord Server",
        DONE: "Done",
        ENABLE_EVAL_COMMAND: "Enable /eval command",
        ENABLE_EVAL_COMMAND_DESC: "Evaluate JavaScript directly from command. Be cautious when using this command as it may pose a security risk. Make sure to know what you are doing.",
        ENABLE_UPDATES: "Enable updates",
        ERROR_BOUNDARY_TOOLS_LABEL: "ErrorBoundary Tools",
        EXTRACT: "Extract",
        FONT_NAME: "Font Name",
        FONTS: "Fonts",
        GENERAL: "General",
        GITHUB: "GitHub",
        HOLD_UP: "Hold Up",
        INFO: "Info",
        INSTALL: "Install",
        INSTALL_ADDON: "Install an add-on",
        INSTALL_FONT: "Install a font",
        INSTALL_PLUGIN: "Install a plugin",
        INSTALL_REACT_DEVTOOLS: "Install React DevTools",
        INSTALL_THEME: "Install Theme",
        LABEL_EXTRACT_FONTS_FROM_THEME: "Extract font from theme",
        LINKS: "Links",
        LOAD_FROM_CUSTOM_URL: "Load from custom URL",
        LOAD_FROM_CUSTOM_URL_DEC: "Load SChat from a custom endpoint.",
        LOAD_REACT_DEVTOOLS: "Load React DevTools",
        LOADER: "Loader",
        MACHINE_ID: "Machine ID",
        MANUFACTURER: "Manufacturer",
        MESSAGE: "Message",
        MISCELLANEOUS: "Miscellaneous",
        MODAL_THEME_REFETCHED: "Theme refetched",
        MODAL_THEME_REFETCHED_DESC: "A reload is required to see the changes. Do you want to reload now?",
        MODAL_UNPROXIED_PLUGIN_DESC: "The plugin you are trying to install has not been proxied/verified by staffs. Are you sure you want to continue?",
        MODAL_UNPROXIED_PLUGIN_HEADER: "Unproxied Plugin",
        MODEL: "Model",
        OPEN_IN_BROWSER: "Open in Browser",
        OPERATING_SYSTEM: "Operating System",
        OVERFLOW_PLUGIN_SETTINGS: "Plugin settings",
        PLATFORM: "Platform",
        PLUGIN_REFETCH_FAILED: "Failed to refetch plugin!",
        PLUGIN_REFETCH_SUCCESSFUL: "Successfully refetched plugin!",
        PLUGINS: "Plugins",
        REFETCH: "Refetch",
        RELOAD: "Reload",
        RELOAD_DISCORD: "Reload Discord",
        RELOAD_IN_NORMAL_MODE: "Reload in Normal Mode",
        RELOAD_IN_NORMAL_MODE_DESC: "This will reload Discord normally",
        RELOAD_IN_SAFE_MODE: "Reload in Safe Mode",
        RELOAD_IN_SAFE_MODE_DESC: "This will reload Discord without loading addons",
        REMOVE: "Remove",
        RESTART_REQUIRED_TO_TAKE_EFFECT: "Restart is required to take effect",
        RETRY: "Retry",
        RETRY_RENDER: "Retry Render",
        SAFE_MODE: "Safe Mode",
        SAFE_MODE_NOTICE_FONTS: "You are in Safe Mode, meaning fonts have been temporarily disabled. {enabled, select, true {If a font appears to be causing the issue, you can press below to disable it persistently.} other {}}",
        SAFE_MODE_NOTICE_PLUGINS: "You are in Safe Mode, so plugins cannot be loaded. Disable any misbehaving plugins, then return to Normal Mode from the General settings page.",
        SAFE_MODE_NOTICE_THEMES: "You are in Safe Mode, meaning themes have been temporarily disabled. {enabled, select, true {If a theme appears to be causing the issue, you can press below to disable it persistently.} other {}}",
        SEARCH: "Search",
        SEPARATOR: ", ",
        SETTINGS_ACTIVATE_DISCORD_EXPERIMENTS: "Activate Discord Experiments",
        SETTINGS_ACTIVATE_DISCORD_EXPERIMENTS_DESC: "Warning: Messing with this feature may lead to account termination. We are not responsible for what you do with this feature.",
        STACK_TRACE: "Stack Trace",
        SUCCESSFULLY_INSTALLED: "Successfully installed",
        THEME_EXTRACTOR_DESC: "This pack overrides the following: {fonts}",
        THEME_REFETCH_FAILED: "Failed to refetch theme!",
        THEME_REFETCH_SUCCESSFUL: "Successfully refetched theme.",
        THEMES: "Themes",
        THEMES_RELOAD_FOR_CHANGES: "Reload the app to fully apply changes!",
        TOASTS_INSTALLED_PLUGIN: "Installed plugin",
        TOASTS_PLUGIN_UPDATE: "{update, select, true {Enabled} other {Disabled}} updates for {name}.",
        UH_OH: "Uh oh.",
        UNINSTALL: "Uninstall",
        UNINSTALL_TITLE: "Uninstall {title}",
        URL_PLACEHOLDER: "https://example.com",
        VERSION: "Version",
        VERSIONS: "Versions"
      };
    }
  });

  // src/core/i18n/index.ts
  function initFetchI18nStrings() {
    var cb = ({ locale }) => {
      var languageMap = {
        "es-ES": "es",
        "es-419": "es_419",
        "zh-TW": "zh-Hant",
        "zh-CN": "zh-Hans",
        "pt-PT": "pt",
        "pt-BR": "pt_BR",
        "sv-SE": "sv"
      };
      var resolvedLocale = _lastSetLocale = languageMap[locale] ?? locale;
      if (resolvedLocale.startsWith("en-")) {
        _currentLocale = null;
        return;
      }
      if (!_loadedLocale.has(resolvedLocale)) {
        _loadedLocale.add(resolvedLocale);
        fetch(`https://raw.githubusercontent.com/Soncresity-Industries/SChat-i18n/main/resources/${resolvedLocale}/schat.json`).then((r) => r.json()).then((strings) => _loadedStrings[resolvedLocale] = strings).then(() => resolvedLocale === _lastSetLocale && (_currentLocale = resolvedLocale)).catch((e) => console.error(`An error occured while fetching strings for ${resolvedLocale}: ${e}`));
      } else {
        _currentLocale = resolvedLocale;
      }
    };
    FluxDispatcher.subscribe("I18N_LOAD_SUCCESS", cb);
    return () => FluxDispatcher.unsubscribe("I18N_LOAD_SUCCESS", cb);
  }
  function formatString(key, val) {
    var str = Strings[key];
    return new IntlMessageFormat(str).format(val);
  }
  var IntlMessageFormat, _currentLocale, _lastSetLocale, _loadedLocale, _loadedStrings, Strings;
  var init_i18n = __esm({
    "src/core/i18n/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_common();
      init_wrappers();
      init_default();
      IntlMessageFormat = findByNameLazy("MessageFormat");
      _currentLocale = null;
      _lastSetLocale = null;
      _loadedLocale = /* @__PURE__ */ new Set();
      _loadedStrings = {};
      Strings = new Proxy({}, {
        get: (_t, prop) => {
          if (_currentLocale && _loadedStrings[_currentLocale]?.[prop]) {
            return _loadedStrings[_currentLocale]?.[prop];
          }
          return default_default[prop];
        }
      });
    }
  });

  // src/lib/ui/toasts.ts
  var toasts_exports = {};
  __export(toasts_exports, {
    showToast: () => showToast
  });
  var uuid4, showToast;
  var init_toasts = __esm({
    "src/lib/ui/toasts.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_i18n();
      init_assets();
      init_lazy();
      init_common();
      init_wrappers();
      ({ uuid4 } = lazyDestructure(() => findByProps("uuid4")));
      showToast = (content, asset) => toasts.open({
        // ? In build 182205/44707, Discord changed their toasts, source is no longer used, rather icon, and a key is needed.
        // TODO: We could probably have the developer specify a key themselves, but this works to fix toasts
        key: `vd-toast-${uuid4()}`,
        content,
        source: asset,
        icon: asset
      });
      showToast.showCopyToClipboard = (message = Strings.COPIED_TO_CLIPBOARD) => {
        showToast(message, findAssetId("toast_copy_link"));
      };
    }
  });

  // src/lib/api/debug.ts
  var debug_exports = {};
  __export(debug_exports, {
    connectToDebugger: () => connectToDebugger,
    getDebugInfo: () => getDebugInfo,
    patchLogHook: () => patchLogHook,
    toggleSafeMode: () => toggleSafeMode,
    versionHash: () => versionHash
  });
  function toggleSafeMode() {
    return _toggleSafeMode.apply(this, arguments);
  }
  function _toggleSafeMode() {
    _toggleSafeMode = _async_to_generator(function* () {
      settings.safeMode = {
        ...settings.safeMode,
        enabled: !settings.safeMode?.enabled
      };
      if (isThemeSupported()) {
        if (getThemeFromLoader()?.id)
          settings.safeMode.currentThemeId = getThemeFromLoader().id;
        if (settings.safeMode?.enabled) {
          yield selectTheme(null);
        } else if (settings.safeMode?.currentThemeId) {
          yield selectTheme(themes[settings.safeMode?.currentThemeId]);
        }
      }
      setTimeout(BundleUpdaterManager.reload, 400);
    });
    return _toggleSafeMode.apply(this, arguments);
  }
  function connectToDebugger(url2) {
    if (socket !== void 0 && socket.readyState !== WebSocket.CLOSED)
      socket.close();
    if (!url2) {
      showToast("Invalid debugger URL!", findAssetId("Small"));
      return;
    }
    socket = new WebSocket(`ws://${url2}`);
    socket.addEventListener("open", () => showToast("Connected to debugger.", findAssetId("Check")));
    socket.addEventListener("message", (message) => {
      try {
        (0, eval)(message.data);
      } catch (e) {
        console.error(e);
      }
    });
    socket.addEventListener("error", (err) => {
      console.log(`Debugger error: ${err.message}`);
      showToast("An error occurred with the debugger connection!", findAssetId("Small"));
    });
  }
  function patchLogHook() {
    var unpatch = after("nativeLoggingHook", globalThis, (args) => {
      if (socket?.readyState === WebSocket.OPEN)
        socket.send(JSON.stringify({
          message: args[0],
          level: args[1]
        }));
      logger.log(args[0]);
    });
    return () => {
      socket && socket.close();
      unpatch();
    };
  }
  function getDebugInfo() {
    var hermesProps = window.HermesInternal.getRuntimeProperties();
    var hermesVer = hermesProps["OSS Release Version"];
    var padding = "for RN ";
    var PlatformConstants = import_react_native5.Platform.constants;
    var rnVer = PlatformConstants.reactNativeVersion;
    return {
      /**
       * @deprecated use `schat` field
       * */
      vendetta: {
        version: versionHash.split("-")[0],
        loader: getLoaderName()
      },
      schat: {
        version: versionHash,
        loader: {
          name: getLoaderName(),
          version: getLoaderVersion()
        }
      },
      discord: {
        version: NativeClientInfoModule.Version,
        build: NativeClientInfoModule.Build
      },
      react: {
        version: React.version,
        nativeVersion: hermesVer.startsWith(padding) ? hermesVer.substring(padding.length) : `${rnVer.major}.${rnVer.minor}.${rnVer.patch}`
      },
      hermes: {
        version: hermesVer,
        buildType: hermesProps.Build,
        bytecodeVersion: hermesProps["Bytecode Version"]
      },
      ...import_react_native5.Platform.select({
        android: {
          os: {
            name: "Android",
            version: PlatformConstants.Release,
            sdk: PlatformConstants.Version
          }
        },
        ios: {
          os: {
            name: PlatformConstants.systemName,
            version: PlatformConstants.osVersion
          }
        }
      }),
      ...import_react_native5.Platform.select({
        android: {
          device: {
            manufacturer: PlatformConstants.Manufacturer,
            brand: PlatformConstants.Brand,
            model: PlatformConstants.Model,
            codename: NativeDeviceModule.device
          }
        },
        ios: {
          device: {
            manufacturer: NativeDeviceModule.deviceManufacturer,
            brand: NativeDeviceModule.deviceBrand,
            model: NativeDeviceModule.deviceModel,
            codename: NativeDeviceModule.device
          }
        }
      })
    };
  }
  var import_react_native5, socket, versionHash;
  var init_debug = __esm({
    "src/lib/api/debug.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_themes();
      init_assets();
      init_loader();
      init_modules();
      init_patcher();
      init_settings();
      init_logger();
      init_toasts();
      import_react_native5 = __toESM(require_react_native());
      versionHash = "f4c160c-main";
    }
  });

  // src/lib/ui/components/wrappers/AlertModal.tsx
  function AlertModal2(props) {
    var forwardFailedModal = findByFilePath("modules/forwarding/native/ForwardFailedAlertModal.tsx");
    if (!forwardFailedModal && "extraContent" in props) {
      props.content = /* @__PURE__ */ jsxs(import_react_native6.View, {
        style: {
          gap: 16
        },
        children: [
          /* @__PURE__ */ jsx(Text, {
            variant: "text-md/medium",
            color: "text-muted",
            children: props.content
          }),
          /* @__PURE__ */ jsx(import_react_native6.View, {
            children: props.extraContent
          })
        ]
      });
      delete props.extraContent;
    }
    return /* @__PURE__ */ jsx(_AlertModal, {
      ...props
    });
  }
  var import_react_native6, _AlertModal, _AlertActionButton, AlertActionButton2;
  var init_AlertModal = __esm({
    "src/lib/ui/components/wrappers/AlertModal.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_lazy();
      init_metro();
      init_components();
      import_react_native6 = __toESM(require_react_native());
      ({ AlertModal: _AlertModal, AlertActionButton: _AlertActionButton } = lazyDestructure(() => findByProps("AlertModal", "AlertActions")));
      AlertActionButton2 = _AlertActionButton;
    }
  });

  // src/lib/ui/components/wrappers/index.ts
  var wrappers_exports = {};
  __export(wrappers_exports, {
    AlertActionButton: () => AlertActionButton2,
    AlertModal: () => AlertModal2
  });
  var init_wrappers2 = __esm({
    "src/lib/ui/components/wrappers/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_AlertModal();
    }
  });

  // src/lib/ui/color.ts
  function isSemanticColor(sym) {
    return colorResolver.isSemanticColor(sym);
  }
  function resolveSemanticColor(sym, theme = ThemeStore2.theme) {
    return colorResolver.resolveSemanticColor(theme, sym);
  }
  var color, semanticColors, rawColors, ThemeStore2, colorResolver;
  var init_color = __esm({
    "src/lib/ui/color.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_common();
      init_wrappers();
      color = findByProps("SemanticColor");
      semanticColors = color?.default?.colors ?? constants?.ThemeColorMap;
      rawColors = color?.default?.unsafe_rawColors ?? constants?.Colors;
      ThemeStore2 = findByStoreNameLazy("ThemeStore");
      colorResolver = color.default.meta ??= color.default.internal;
    }
  });

  // src/lib/ui/styles.ts
  var styles_exports = {};
  __export(styles_exports, {
    TextStyleSheet: () => TextStyleSheet,
    ThemeContext: () => ThemeContext,
    createLegacyClassComponentStyles: () => createLegacyClassComponentStyles,
    createStyles: () => createStyles,
    createThemedStyleSheet: () => createThemedStyleSheet
  });
  function createStyles(sheet) {
    return proxyLazy(() => Styles.createStyles(sheet));
  }
  function createLegacyClassComponentStyles(sheet) {
    return proxyLazy(() => Styles.createLegacyClassComponentStyles(sheet));
  }
  function createThemedStyleSheet(sheet) {
    for (var key in sheet) {
      sheet[key] = new Proxy(import_react_native7.StyleSheet.flatten(sheet[key]), {
        get(target, prop, receiver) {
          var res = Reflect.get(target, prop, receiver);
          return isSemanticColor(res) ? resolveSemanticColor(res) : res;
        }
      });
    }
    return sheet;
  }
  var import_react_native7, Styles, ThemeContext, TextStyleSheet;
  var init_styles = __esm({
    "src/lib/ui/styles.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_lazy();
      init_wrappers();
      init_color();
      import_react_native7 = __toESM(require_react_native());
      Styles = findByPropsLazy("createStyles");
      ({ ThemeContext } = lazyDestructure(() => findByProps("ThemeContext"), {
        hint: "object"
      }));
      ({ TextStyleSheet } = lazyDestructure(() => findByProps("TextStyleSheet")));
    }
  });

  // src/lib/ui/components/Codeblock.tsx
  function Codeblock({ selectable, style, children }) {
    if (!selectable)
      return /* @__PURE__ */ jsx(TextBasedCodeblock, {
        style,
        children
      });
    return import_react_native8.Platform.select({
      ios: /* @__PURE__ */ jsx(InputBasedCodeblock, {
        style,
        children
      }),
      default: /* @__PURE__ */ jsx(TextBasedCodeblock, {
        style,
        children,
        selectable: true
      })
    });
  }
  var import_react_native8, useStyles, InputBasedCodeblock, TextBasedCodeblock;
  var init_Codeblock = __esm({
    "src/lib/ui/components/Codeblock.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_common();
      init_color();
      init_styles();
      import_react_native8 = __toESM(require_react_native());
      useStyles = createStyles({
        codeBlock: {
          fontFamily: constants.Fonts.CODE_NORMAL,
          fontSize: 12,
          textAlignVertical: "center",
          backgroundColor: semanticColors.BACKGROUND_SECONDARY,
          color: semanticColors.TEXT_NORMAL,
          borderWidth: 1,
          borderRadius: 12,
          borderColor: semanticColors.BACKGROUND_TERTIARY,
          padding: 10
        }
      });
      InputBasedCodeblock = ({ style, children }) => /* @__PURE__ */ jsx(import_react_native8.TextInput, {
        editable: false,
        multiline: true,
        style: [
          useStyles().codeBlock,
          style && style
        ],
        value: children
      });
      TextBasedCodeblock = ({ selectable, style, children }) => /* @__PURE__ */ jsx(import_react_native8.Text, {
        selectable,
        style: [
          useStyles().codeBlock,
          style && style
        ],
        children
      });
    }
  });

  // src/lib/ui/sheets.ts
  var sheets_exports = {};
  __export(sheets_exports, {
    hideSheet: () => hideSheet,
    showSheet: () => showSheet
  });
  function showSheet(key, lazyImport, props) {
    if (!("then" in lazyImport))
      lazyImport = Promise.resolve({
        default: lazyImport
      });
    actionSheet.openLazy(lazyImport, key, props ?? {});
  }
  function hideSheet(key) {
    actionSheet.hideActionSheet(key);
  }
  var actionSheet;
  var init_sheets = __esm({
    "src/lib/ui/sheets.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_wrappers();
      actionSheet = findByPropsLazy("openLazy", "hideActionSheet");
    }
  });

  // src/core/ui/reporter/utils/parseComponentStack.tsx
  function parseComponentStack(componentStack) {
    return componentStack.split(/[\s|\n]+?in /).filter(Boolean);
  }
  var init_parseComponentStack = __esm({
    "src/core/ui/reporter/utils/parseComponentStack.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // globals:react
  var require_react = __commonJS({
    "globals:react"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["react"];
    }
  });

  // src/core/ui/reporter/components/ErrorComponentStackCard.tsx
  function ErrorComponentStackCard(props) {
    var [collapsed, setCollapsed] = (0, import_react.useState)(true);
    var stack;
    try {
      stack = parseComponentStack(props.componentStack);
      stack = collapsed ? stack.slice(0, 4) : stack;
    } catch (e) {
      return;
    }
    return /* @__PURE__ */ jsx(Card, {
      children: /* @__PURE__ */ jsxs(import_react_native9.View, {
        style: {
          gap: 8
        },
        children: [
          /* @__PURE__ */ jsx(Text, {
            variant: "heading-lg/bold",
            children: "Component Stack"
          }),
          /* @__PURE__ */ jsx(import_react_native9.View, {
            style: {
              gap: 4
            },
            children: stack.map((component) => /* @__PURE__ */ jsxs(import_react_native9.View, {
              style: {
                flexDirection: "row"
              },
              children: [
                /* @__PURE__ */ jsx(Text, {
                  variant: "text-md/bold",
                  color: "text-muted",
                  children: "<"
                }),
                /* @__PURE__ */ jsx(Text, {
                  variant: "text-md/bold",
                  children: component
                }),
                /* @__PURE__ */ jsx(Text, {
                  variant: "text-md/bold",
                  color: "text-muted",
                  children: "/>"
                })
              ]
            }))
          }),
          collapsed && /* @__PURE__ */ jsx(Text, {
            children: "..."
          }),
          /* @__PURE__ */ jsxs(import_react_native9.View, {
            style: {
              gap: 8,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx(Button, {
                variant: "secondary",
                text: `Show ${collapsed ? "more" : "less"}`,
                icon: collapsed ? findAssetId("down_arrow") : /* @__PURE__ */ jsx(import_react_native9.Image, {
                  style: {
                    transform: [
                      {
                        rotate: `${collapsed ? 0 : 180}deg`
                      }
                    ]
                  },
                  source: findAssetId("down_arrow")
                }),
                onPress: () => setCollapsed((v2) => !v2)
              }),
              /* @__PURE__ */ jsx(Button, {
                variant: "secondary",
                text: "Copy",
                icon: findAssetId("CopyIcon"),
                onPress: () => clipboard.setString(props.componentStack)
              })
            ]
          })
        ]
      })
    });
  }
  var import_react, import_react_native9;
  var init_ErrorComponentStackCard = __esm({
    "src/core/ui/reporter/components/ErrorComponentStackCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_parseComponentStack();
      init_assets();
      init_common();
      init_components();
      import_react = __toESM(require_react());
      import_react_native9 = __toESM(require_react_native());
    }
  });

  // src/core/ui/reporter/utils/parseErrorStack.ts
  function isInternalBytecodeSourceUrl(sourceUrl) {
    return sourceUrl === "InternalBytecode.js";
  }
  function parseLine(line) {
    var asFrame = line.match(RE_FRAME);
    if (asFrame) {
      return {
        type: "FRAME",
        functionName: asFrame[1],
        location: asFrame[2] === "native" ? {
          type: "NATIVE"
        } : asFrame[3] === "address at " ? isInternalBytecodeSourceUrl(asFrame[4]) ? {
          type: "INTERNAL_BYTECODE",
          sourceUrl: asFrame[4],
          line1Based: Number.parseInt(asFrame[5], 10),
          virtualOffset0Based: Number.parseInt(asFrame[6], 10)
        } : {
          type: "BYTECODE",
          sourceUrl: asFrame[4],
          line1Based: Number.parseInt(asFrame[5], 10),
          virtualOffset0Based: Number.parseInt(asFrame[6], 10)
        } : {
          type: "SOURCE",
          sourceUrl: asFrame[4],
          line1Based: Number.parseInt(asFrame[5], 10),
          column1Based: Number.parseInt(asFrame[6], 10)
        }
      };
    }
    var asSkipped = line.match(RE_SKIPPED);
    if (asSkipped) {
      return {
        type: "SKIPPED",
        count: Number.parseInt(asSkipped[1], 10)
      };
    }
  }
  function parseHermesStack(stack) {
    var lines = stack.split(/\n/);
    var entries = [];
    var lastMessageLine = -1;
    for (var i = 0; i < lines.length; ++i) {
      var line = lines[i];
      if (!line) {
        continue;
      }
      var entry = parseLine(line);
      if (entry) {
        entries.push(entry);
        continue;
      }
      if (RE_COMPONENT_NO_STACK.test(line)) {
        continue;
      }
      lastMessageLine = i;
      entries = [];
    }
    var message = lines.slice(0, lastMessageLine + 1).join("\n");
    return {
      message,
      entries
    };
  }
  function convertHermesStack(stack) {
    var frames = [];
    for (var entry of stack.entries) {
      if (entry.type !== "FRAME") {
        continue;
      }
      var { location, functionName } = entry;
      if (location.type === "NATIVE" || location.type === "INTERNAL_BYTECODE") {
        continue;
      }
      frames.push({
        methodName: functionName,
        file: location.sourceUrl,
        lineNumber: location.line1Based,
        column: location.type === "SOURCE" ? location.column1Based - 1 : location.virtualOffset0Based
      });
    }
    return frames;
  }
  function parseErrorStack(errorStack) {
    if (errorStack == null) {
      return [];
    }
    var parsedStack = Array.isArray(errorStack) ? errorStack : convertHermesStack(parseHermesStack(errorStack));
    return parsedStack;
  }
  var RE_FRAME, RE_SKIPPED, RE_COMPONENT_NO_STACK;
  var init_parseErrorStack = __esm({
    "src/core/ui/reporter/utils/parseErrorStack.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      RE_FRAME = /^ {4}at (.+?)(?: \((native)\)?| \((address at )?(.*?):(\d+):(\d+)\))$/;
      RE_SKIPPED = /^ {4}... skipping (\d+) frames$/;
      RE_COMPONENT_NO_STACK = /^ {4}at .*$/;
    }
  });

  // src/core/ui/reporter/components/ErrorStackCard.tsx
  function ErrorStackCard(props) {
    var [collapsed, setCollapsed] = (0, import_react2.useState)(true);
    var stack;
    try {
      var parsedErrorStack = parseErrorStack(props.error.stack);
      stack = collapsed ? parsedErrorStack.slice(0, 4) : parsedErrorStack;
    } catch (e) {
      return null;
    }
    return /* @__PURE__ */ jsx(Card, {
      children: /* @__PURE__ */ jsxs(import_react_native10.View, {
        style: {
          gap: 12
        },
        children: [
          /* @__PURE__ */ jsx(Text, {
            variant: "heading-lg/bold",
            children: "Call Stack"
          }),
          /* @__PURE__ */ jsx(import_react_native10.View, {
            style: {
              gap: 4
            },
            children: stack.map((f, id) => /* @__PURE__ */ jsx(Line, {
              id,
              frame: f
            }))
          }),
          collapsed && /* @__PURE__ */ jsx(Text, {
            children: "..."
          }),
          /* @__PURE__ */ jsxs(import_react_native10.View, {
            style: {
              gap: 8,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx(Button, {
                variant: "secondary",
                text: `Show ${collapsed ? "more" : "less"}`,
                icon: collapsed ? findAssetId("down_arrow") : /* @__PURE__ */ jsx(import_react_native10.Image, {
                  style: {
                    transform: [
                      {
                        rotate: `${collapsed ? 0 : 180}deg`
                      }
                    ]
                  },
                  source: findAssetId("down_arrow")
                }),
                onPress: () => setCollapsed((v2) => !v2)
              }),
              /* @__PURE__ */ jsx(Button, {
                variant: "secondary",
                text: "Copy",
                icon: findAssetId("CopyIcon"),
                onPress: () => clipboard.setString(props.error.stack)
              })
            ]
          })
        ]
      })
    });
  }
  function Line(props) {
    var [collapsed, setCollapsed] = (0, import_react2.useState)(true);
    return /* @__PURE__ */ jsxs(import_react_native10.Pressable, {
      onPress: () => setCollapsed((v2) => !v2),
      children: [
        /* @__PURE__ */ jsx(Text, {
          style: {
            fontFamily: constants.Fonts.CODE_BOLD
          },
          children: props.frame.methodName
        }),
        /* @__PURE__ */ jsx(Text, {
          style: {
            fontFamily: constants.Fonts.CODE_NORMAL
          },
          ellipsizeMode: "middle",
          numberOfLines: collapsed ? 1 : void 0,
          children: /* @__PURE__ */ jsxs(Text, {
            color: "text-muted",
            children: [
              props.frame.file === INDEX_BUNDLE_FILE ? "jsbundle" : props.frame.file,
              ":",
              props.frame.lineNumber,
              ":",
              props.frame.column
            ]
          })
        })
      ]
    }, props.id);
  }
  var import_react2, import_react_native10;
  var init_ErrorStackCard = __esm({
    "src/core/ui/reporter/components/ErrorStackCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_parseErrorStack();
      init_assets();
      init_common();
      init_components();
      import_react2 = __toESM(require_react());
      import_react_native10 = __toESM(require_react_native());
      init_ErrorCard();
    }
  });

  // src/core/ui/reporter/components/ErrorDetailsActionSheet.tsx
  function ErrorDetailsActionSheet(props) {
    return /* @__PURE__ */ jsx(ActionSheet, {
      children: /* @__PURE__ */ jsxs(import_react_native11.View, {
        style: {
          gap: 12,
          paddingVertical: 12
        },
        children: [
          /* @__PURE__ */ jsx(Text, {
            variant: "heading-lg/extrabold",
            children: "Error"
          }),
          /* @__PURE__ */ jsx(Codeblock, {
            selectable: true,
            children: props.error.message
          }),
          hasStack(props.error) && /* @__PURE__ */ jsx(ErrorStackCard, {
            error: props.error
          }),
          isComponentStack(props.error) ? /* @__PURE__ */ jsx(ErrorComponentStackCard, {
            componentStack: props.error.componentStack
          }) : null
        ]
      })
    });
  }
  var import_react_native11;
  var init_ErrorDetailsActionSheet = __esm({
    "src/core/ui/reporter/components/ErrorDetailsActionSheet.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_isStack();
      init_components2();
      init_components();
      import_react_native11 = __toESM(require_react_native());
      init_ErrorComponentStackCard();
      init_ErrorStackCard();
    }
  });

  // src/core/ui/reporter/components/ErrorCard.tsx
  function ErrorCard(props) {
    return /* @__PURE__ */ jsx(Card, {
      children: /* @__PURE__ */ jsxs(Stack, {
        children: [
          props.header && typeof props.header !== "string" ? props.header : /* @__PURE__ */ jsx(Text, {
            variant: "heading-lg/bold",
            children: props.header ?? Strings.UH_OH
          }),
          /* @__PURE__ */ jsx(Codeblock, {
            selectable: true,
            children: String(props.error)
          }),
          /* @__PURE__ */ jsxs(TwinButtons, {
            children: [
              props.onRetryRender && /* @__PURE__ */ jsx(Button, {
                variant: "destructive",
                // icon={findAssetId("RetryIcon")}
                text: Strings.RETRY_RENDER,
                onPress: props.onRetryRender
              }),
              props.error instanceof Error ? /* @__PURE__ */ jsx(Button, {
                text: "Details",
                // icon={findAssetId("CircleInformationIcon-primary")}
                onPress: () => showSheet("SChatErrorDetailsActionSheet", ErrorDetailsActionSheet, {
                  error: props.error
                })
              }) : null
            ]
          })
        ]
      })
    });
  }
  var INDEX_BUNDLE_FILE;
  var init_ErrorCard = __esm({
    "src/core/ui/reporter/components/ErrorCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_i18n();
      init_components2();
      init_sheets();
      init_components();
      init_ErrorDetailsActionSheet();
      INDEX_BUNDLE_FILE = window.HermesInternal.getFunctionLocation(window.__r).fileName;
    }
  });

  // src/lib/ui/components/ErrorBoundary.tsx
  var _React_Component, ErrorBoundary;
  var init_ErrorBoundary = __esm({
    "src/lib/ui/components/ErrorBoundary.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_create_class();
      init_define_property();
      init_inherits();
      init_jsxRuntime();
      init_ErrorCard();
      init_common();
      init_styles();
      ErrorBoundary = /* @__PURE__ */ function(_superClass) {
        "use strict";
        _inherits(ErrorBoundary2, _superClass);
        function ErrorBoundary2(props) {
          _class_call_check(this, ErrorBoundary2);
          var _this;
          _this = _call_super(this, ErrorBoundary2, [
            props
          ]);
          _this.state = {
            hasErr: false
          };
          return _this;
        }
        _create_class(ErrorBoundary2, [
          {
            key: "render",
            value: function render() {
              if (!this.state.hasErr)
                return this.props.children;
              return /* @__PURE__ */ jsx(ErrorCard, {
                error: this.state.error,
                onRetryRender: () => this.setState({
                  hasErr: false
                })
              });
            }
          }
        ]);
        return ErrorBoundary2;
      }(_React_Component = React2.Component);
      _define_property(ErrorBoundary, "contextType", ThemeContext);
      _define_property(ErrorBoundary, "getDerivedStateFromError", (error) => ({
        hasErr: true,
        error
      }));
    }
  });

  // src/lib/ui/components/Search.tsx
  function SearchIcon() {
    return /* @__PURE__ */ jsx(import_react_native12.Image, {
      style: {
        width: 16,
        height: 16
      },
      source: findAssetId("search")
    });
  }
  var import_react_native12, Search_default;
  var init_Search = __esm({
    "src/lib/ui/components/Search.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_i18n();
      init_assets();
      init_components();
      init_ErrorBoundary();
      import_react_native12 = __toESM(require_react_native());
      Search_default = ({ onChangeText, placeholder, style, isRound }) => {
        var [query, setQuery] = React.useState("");
        var onChange = (value) => {
          setQuery(value);
          onChangeText?.(value);
        };
        return /* @__PURE__ */ jsx(ErrorBoundary, {
          children: /* @__PURE__ */ jsx(import_react_native12.View, {
            style,
            children: /* @__PURE__ */ jsx(TextInput, {
              grow: true,
              isClearable: true,
              leadingIcon: SearchIcon,
              placeholder: placeholder ?? Strings.SEARCH,
              onChange,
              returnKeyType: "search",
              size: "md",
              autoCapitalize: "none",
              autoCorrect: false,
              isRound,
              value: query
            })
          })
        });
      };
    }
  });

  // src/lib/ui/components/Summary.tsx
  function Summary({ label, icon, noPadding = false, noAnimation = false, children }) {
    var [hidden, setHidden] = React.useState(true);
    return /* @__PURE__ */ jsxs(Fragment, {
      children: [
        /* @__PURE__ */ jsx(TableRow, {
          label,
          icon: icon && /* @__PURE__ */ jsx(TableRow.Icon, {
            source: findAssetId(icon)
          }),
          trailing: /* @__PURE__ */ jsx(LegacyFormRow.Arrow, {
            style: {
              transform: [
                {
                  rotate: `${hidden ? 180 : 90}deg`
                }
              ]
            }
          }),
          onPress: () => {
            setHidden(!hidden);
            if (!noAnimation)
              import_react_native13.LayoutAnimation.configureNext(import_react_native13.LayoutAnimation.Presets.easeInEaseOut);
          }
        }),
        !hidden && /* @__PURE__ */ jsx(Fragment, {
          children: /* @__PURE__ */ jsx(import_react_native13.View, {
            style: !noPadding && {
              paddingHorizontal: 15
            },
            children
          })
        })
      ]
    });
  }
  var import_react_native13;
  var init_Summary = __esm({
    "src/lib/ui/components/Summary.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_assets();
      init_components();
      import_react_native13 = __toESM(require_react_native());
    }
  });

  // src/lib/ui/components/index.ts
  var components_exports2 = {};
  __export(components_exports2, {
    Codeblock: () => Codeblock,
    ErrorBoundary: () => ErrorBoundary,
    Search: () => Search_default,
    Summary: () => Summary,
    wrappers: () => wrappers_exports
  });
  var init_components2 = __esm({
    "src/lib/ui/components/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_wrappers2();
      init_Codeblock();
      init_ErrorBoundary();
      init_Search();
      init_Summary();
    }
  });

  // src/core/ui/reporter/components/ErrorBoundaryScreen.tsx
  function ErrorBoundaryScreen(props) {
    var styles = useStyles2();
    var debugInfo = getDebugInfo();
    return /* @__PURE__ */ jsx(ErrorBoundary, {
      children: /* @__PURE__ */ jsx(SafeAreaProvider, {
        children: /* @__PURE__ */ jsxs(SafeAreaView, {
          style: styles.container,
          children: [
            /* @__PURE__ */ jsxs(import_react_native14.View, {
              style: {
                gap: 4
              },
              children: [
                /* @__PURE__ */ jsx(Text, {
                  variant: "display-lg",
                  children: "Uh oh."
                }),
                /* @__PURE__ */ jsx(Text, {
                  variant: "text-md/normal",
                  children: "A crash occurred while rendering a component. This could be caused by a plugin, SChat or Discord itself."
                }),
                /* @__PURE__ */ jsxs(Text, {
                  variant: "text-sm/normal",
                  color: "text-muted",
                  children: [
                    debugInfo.os.name,
                    "; ",
                    debugInfo.discord.build,
                    " (",
                    debugInfo.discord.version,
                    "); ",
                    debugInfo.schat.version
                  ]
                })
              ]
            }),
            /* @__PURE__ */ jsxs(import_react_native14.ScrollView, {
              fadingEdgeLength: 64,
              contentContainerStyle: {
                gap: 12
              },
              children: [
                /* @__PURE__ */ jsx(Codeblock, {
                  selectable: true,
                  children: props.error.message
                }),
                hasStack(props.error) && /* @__PURE__ */ jsx(ErrorStackCard, {
                  error: props.error
                }),
                isComponentStack(props.error) ? /* @__PURE__ */ jsx(ErrorComponentStackCard, {
                  componentStack: props.error.componentStack
                }) : null
              ]
            }),
            /* @__PURE__ */ jsxs(Card, {
              style: {
                gap: 6
              },
              children: [
                /* @__PURE__ */ jsx(Button, {
                  text: "Reload Discord",
                  onPress: () => BundleUpdaterManager.reload()
                }),
                !settings.safeMode?.enabled && /* @__PURE__ */ jsx(Button, {
                  text: "Reload in Safe Mode",
                  onPress: () => toggleSafeMode()
                }),
                /* @__PURE__ */ jsx(Button, {
                  variant: "destructive",
                  text: "Retry Render",
                  onPress: () => props.rerender()
                })
              ]
            })
          ]
        })
      })
    });
  }
  var import_react_native14, useStyles2;
  var init_ErrorBoundaryScreen = __esm({
    "src/core/ui/reporter/components/ErrorBoundaryScreen.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_isStack();
      init_debug();
      init_modules();
      init_settings();
      init_components2();
      init_styles();
      init_common();
      init_components();
      import_react_native14 = __toESM(require_react_native());
      init_ErrorComponentStackCard();
      init_ErrorStackCard();
      useStyles2 = createStyles({
        container: {
          flex: 1,
          backgroundColor: tokens.colors.BG_BASE_SECONDARY,
          paddingHorizontal: 16,
          height: "100%",
          padding: 8,
          gap: 12
        }
      });
    }
  });

  // src/core/debug/patches/patchErrorBoundary.tsx
  function getErrorBoundaryContext() {
    var ctxt = findByNameLazy("ErrorBoundary")[_lazyContextSymbol];
    return new Promise((resolve) => ctxt.getExports((exp) => resolve(exp.prototype)));
  }
  function patchErrorBoundary() {
    return after.await("render", getErrorBoundaryContext(), function() {
      if (!this.state.error)
        return;
      return /* @__PURE__ */ jsx(ErrorBoundaryScreen, {
        error: this.state.error,
        rerender: () => this.setState({
          info: null,
          error: null
        })
      });
    });
  }
  var init_patchErrorBoundary = __esm({
    "src/core/debug/patches/patchErrorBoundary.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_ErrorBoundaryScreen();
      init_patcher();
      init_lazy2();
      init_wrappers();
    }
  });

  // globals:moment
  var require_moment = __commonJS({
    "globals:moment"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["moment"];
    }
  });

  // src/core/fixes.ts
  function onDispatch({ locale }) {
    try {
      import_moment.default.locale(locale.toLowerCase());
    } catch (e) {
      logger.error("Failed to fix timestamps...", e);
    }
    FluxDispatcher.unsubscribe("I18N_LOAD_SUCCESS", onDispatch);
  }
  var import_moment, fixes_default;
  var init_fixes = __esm({
    "src/core/fixes.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_logger();
      init_common();
      import_moment = __toESM(require_moment());
      fixes_default = () => {
        FluxDispatcher.subscribe("I18N_LOAD_SUCCESS", onDispatch);
      };
    }
  });

  // src/assets/icons/si.png
  var si_default;
  var init_si = __esm({
    "src/assets/icons/si.png"() {
      si_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAYAAAB/HSuDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCA1LjEuOWxu2j4AAAC2ZVhJZklJKgAIAAAABQAaAQUAAQAAAEoAAAAbAQUAAQAAAFIAAAAoAQMAAQAAAAIAAAAxAQIAEAAAAFoAAABphwQAAQAAAGoAAAAAAAAAYAAAAAEAAABgAAAAAQAAAFBhaW50Lk5FVCA1LjEuOQADAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAWgBAABAAAAlAAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAABMz8BIJY/XoAAAsWpJREFUeF7s/WnUJNd933n+7s3IrKdQhULxQVWh+BAQKaoEkyhqo2eE8UJAht0WT3uR/XrmhW3SLRKiFopWk5wzxyO3NtpaSQgkCEqiLO+np4/ntMczc2bmDGBipruJ9vR4bEKiJKoJVRVKRC3gU8XCU0/lcu+8iIhc/pmRmfFE7vn94PzxVGbGjYiMvBFx7424NyQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAl8FkAwLbiGAgAAAAAwBagAQAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgEPx/cfSuS2ZYisgAAAAASUVORK5CYII=";
    }
  });

  // src/lib/ui/settings/patches/shared.tsx
  function wrapOnPress(onPress, navigation2, renderPromise, screenOptions, props) {
    return /* @__PURE__ */ _async_to_generator(function* () {
      if (onPress)
        return void onPress();
      var Component = yield renderPromise().then((m2) => m2.default);
      if (typeof screenOptions === "string") {
        screenOptions = {
          title: screenOptions
        };
      }
      navigation2 ??= tabsNavigationRef.getRootNavigationRef();
      navigation2.navigate("SCHAT_CUSTOM_PAGE", {
        ...screenOptions,
        render: () => /* @__PURE__ */ jsx(Component, {
          ...props
        })
      });
    });
  }
  var tabsNavigationRef, CustomPageRenderer;
  var init_shared = __esm({
    "src/lib/ui/settings/patches/shared.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_common();
      init_wrappers();
      init_components2();
      tabsNavigationRef = findByPropsLazy("getRootNavigationRef");
      CustomPageRenderer = React.memo(() => {
        var navigation2 = NavigationNative.useNavigation();
        var route = NavigationNative.useRoute();
        var { render: PageComponent, ...args } = route.params;
        React.useEffect(() => void navigation2.setOptions({
          ...args
        }), []);
        return /* @__PURE__ */ jsx(ErrorBoundary, {
          children: /* @__PURE__ */ jsx(PageComponent, {})
        });
      });
    }
  });

  // src/lib/ui/settings/patches/panel.tsx
  function SettingsSection() {
    var navigation2 = NavigationNative.useNavigation();
    return /* @__PURE__ */ jsx(Fragment, {
      children: Object.keys(registeredSections).map((sect) => registeredSections[sect].length > 0 && /* @__PURE__ */ jsx(LegacyFormSection, {
        title: sect,
        children: registeredSections[sect].filter((r) => r.usePredicate?.() ?? true).map((row, i, arr) => /* @__PURE__ */ jsxs(Fragment, {
          children: [
            /* @__PURE__ */ jsx(LegacyFormRow, {
              label: row.title(),
              leading: /* @__PURE__ */ jsx(LegacyFormIcon, {
                source: row.icon
              }),
              trailing: /* @__PURE__ */ jsx(LegacyFormRow.Arrow, {
                label: row.useTrailing?.() || void 0
              }),
              onPress: wrapOnPress(row.onPress, navigation2, row.render, row.title())
            }),
            i !== arr.length - 1 && /* @__PURE__ */ jsx(LegacyFormDivider, {})
          ]
        }))
      }, sect))
    });
  }
  function patchPanelUI(unpatches) {
    try {
      unpatches.push(after("default", findByNameLazy("getScreens", false), (_a, screens) => ({
        ...screens,
        VendettaCustomPage: {
          title: "SChat",
          render: () => /* @__PURE__ */ jsx(CustomPageRenderer, {})
        },
        SCHAT_CUSTOM_PAGE: {
          title: "SChat",
          render: () => /* @__PURE__ */ jsx(CustomPageRenderer, {})
        }
      })));
      var unpatch = after("default", findByNameLazy("UserSettingsOverviewWrapper", false), (_a, ret) => {
        var UserSettingsOverview = findInReactTree(ret.props.children, (n) => n.type?.name === "UserSettingsOverview");
        unpatches.push(after("renderSupportAndAcknowledgements", UserSettingsOverview.type.prototype, (_args, { props: { children } }) => {
          var index = children.findIndex((c2) => c2?.type?.name === "UploadLogsButton");
          if (index !== -1)
            children.splice(index, 1);
        }));
        unpatches.push(after("render", UserSettingsOverview.type.prototype, (_args, res) => {
          var titles = [
            i18n.Messages.BILLING_SETTINGS,
            i18n.Messages.PREMIUM_SETTINGS
          ];
          var sections = findInReactTree(res.props.children, (n) => n?.children?.[1]?.type === LegacyFormSection)?.children || res.props.children;
          if (sections) {
            var index = sections.findIndex((c2) => titles.includes(c2?.props.label));
            sections.splice(-~index || 4, 0, /* @__PURE__ */ jsx(SettingsSection, {}));
          }
        }));
      }, true);
      unpatches.push(unpatch);
    } catch (e) {
    }
  }
  var init_panel = __esm({
    "src/lib/ui/settings/patches/panel.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_patcher();
      init_utils();
      init_common();
      init_components();
      init_wrappers();
      init_settings2();
      init_shared();
    }
  });

  // src/lib/ui/settings/patches/tabs.tsx
  function useIsFirstRender() {
    var firstRender = false;
    React.useEffect(() => void (firstRender = true), []);
    return firstRender;
  }
  function patchTabsUI(unpatches) {
    var getRows = () => Object.values(registeredSections).flatMap((sect) => sect.map((row) => ({
      [row.key]: {
        type: "pressable",
        title: row.title,
        icon: row.icon,
        IconComponent: () => /* @__PURE__ */ jsx(TableRow.Icon, {
          source: row.icon
        }),
        usePredicate: row.usePredicate,
        useTrailing: row.useTrailing,
        onPress: wrapOnPress(row.onPress, null, row.render, row.title()),
        withArrow: true,
        ...row.rawTabsConfig
      }
    }))).reduce((a, c2) => Object.assign(a, c2));
    var origRendererConfig = settingConstants.SETTING_RENDERER_CONFIG;
    var rendererConfigValue = settingConstants.SETTING_RENDERER_CONFIG;
    Object.defineProperty(settingConstants, "SETTING_RENDERER_CONFIG", {
      enumerable: true,
      configurable: true,
      get: () => ({
        ...rendererConfigValue,
        VendettaCustomPage: {
          type: "route",
          title: () => "SChat",
          screen: {
            route: "VendettaCustomPage",
            getComponent: () => CustomPageRenderer
          }
        },
        SCHAT_CUSTOM_PAGE: {
          type: "route",
          title: () => "SChat",
          screen: {
            route: "SCHAT_CUSTOM_PAGE",
            getComponent: () => CustomPageRenderer
          }
        },
        ...getRows()
      }),
      set: (v2) => rendererConfigValue = v2
    });
    unpatches.push(() => {
      Object.defineProperty(settingConstants, "SETTING_RENDERER_CONFIG", {
        value: origRendererConfig,
        writable: true,
        get: void 0,
        set: void 0
      });
    });
    unpatches.push(after("default", SettingsOverviewScreen, (_2, ret) => {
      if (useIsFirstRender())
        return;
      var { sections } = findInReactTree(ret, (i) => i.props?.sections).props;
      var index = -~sections.findIndex((i) => i.settings.includes("ACCOUNT")) || 1;
      Object.keys(registeredSections).forEach((sect) => {
        sections.splice(index++, 0, {
          label: sect,
          title: sect,
          settings: registeredSections[sect].map((a) => a.key)
        });
      });
    }));
  }
  var settingConstants, SettingsOverviewScreen;
  var init_tabs = __esm({
    "src/lib/ui/settings/patches/tabs.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_patcher();
      init_utils();
      init_components();
      init_wrappers();
      init_settings2();
      init_shared();
      settingConstants = findByPropsLazy("SETTING_RENDERER_CONFIG");
      SettingsOverviewScreen = findByNameLazy("SettingsOverviewScreen", false);
    }
  });

  // src/lib/ui/settings/index.tsx
  var settings_exports2 = {};
  __export(settings_exports2, {
    patchSettings: () => patchSettings,
    registerSection: () => registerSection,
    registeredSections: () => registeredSections
  });
  function registerSection(section) {
    registeredSections[section.name] = section.items;
    return () => delete registeredSections[section.name];
  }
  function patchSettings() {
    var unpatches = new Array();
    patchPanelUI(unpatches);
    patchTabsUI(unpatches);
    return () => unpatches.forEach((u) => u());
  }
  var registeredSections;
  var init_settings2 = __esm({
    "src/lib/ui/settings/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_panel();
      init_tabs();
      registeredSections = {};
    }
  });

  // src/core/debug/safeMode.ts
  function isSafeMode() {
    return settings.safeMode?.enabled === true;
  }
  function toggleSafeMode2() {
    return _toggleSafeMode2.apply(this, arguments);
  }
  function _toggleSafeMode2() {
    _toggleSafeMode2 = _async_to_generator(function* ({ to = !isSafeMode(), reload = true } = {}) {
      var enabled = (settings.safeMode ??= {
        enabled: to
      }).enabled = to;
      var currentColor = getCurrentTheme();
      yield writeThemeToNative(enabled ? {} : currentColor?.data ?? {});
      if (reload)
        setTimeout(() => BundleUpdaterManager.reload(), 500);
    });
    return _toggleSafeMode2.apply(this, arguments);
  }
  var init_safeMode = __esm({
    "src/core/debug/safeMode.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_themes();
      init_modules();
      init_settings();
    }
  });

  // src/core/ui/settings/pages/General/Version.tsx
  function Version({ label, version, icon }) {
    return /* @__PURE__ */ jsx(TableRow, {
      label,
      icon: /* @__PURE__ */ jsx(TableRow.Icon, {
        source: typeof icon === "string" ? findAssetId(icon) : icon
      }),
      trailing: /* @__PURE__ */ jsx(LegacyFormText, {
        children: version
      }),
      onPress: () => {
        clipboard.setString(`${label} - ${version}`);
        showToast.showCopyToClipboard();
      }
    });
  }
  var init_Version = __esm({
    "src/core/ui/settings/pages/General/Version.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_assets();
      init_common();
      init_components();
      init_toasts();
    }
  });

  // src/core/ui/settings/pages/General/About.tsx
  function About() {
    var debugInfo = getDebugInfo();
    useProxy(settings);
    var versions = [
      {
        label: Strings.SCHAT,
        version: debugInfo.schat.version,
        icon: {
          uri: si_default
        }
      },
      {
        label: "Discord",
        version: `${debugInfo.discord.version} (${debugInfo.discord.build})`,
        icon: "Discord"
      },
      {
        label: "React",
        version: debugInfo.react.version,
        icon: "ScienceIcon"
      },
      {
        label: "React Native",
        version: debugInfo.react.nativeVersion,
        icon: "MobilePhoneIcon"
      },
      {
        label: Strings.BYTECODE,
        version: debugInfo.hermes.bytecodeVersion,
        icon: "TopicsIcon"
      }
    ];
    var platformInfo = [
      {
        label: Strings.LOADER,
        version: `${debugInfo.schat.loader.name} (${debugInfo.schat.loader.version})`,
        icon: "DownloadIcon"
      },
      {
        label: Strings.OPERATING_SYSTEM,
        version: `${debugInfo.os.name} ${debugInfo.os.version}`,
        icon: "ScreenIcon"
      },
      ...debugInfo.os.sdk ? [
        {
          label: "SDK",
          version: debugInfo.os.sdk,
          icon: "StaffBadgeIcon"
        }
      ] : [],
      {
        label: Strings.MANUFACTURER,
        version: debugInfo.device.manufacturer,
        icon: "WrenchIcon"
      },
      {
        label: Strings.BRAND,
        version: debugInfo.device.brand,
        icon: "SparklesIcon"
      },
      {
        label: Strings.MODEL,
        version: debugInfo.device.model,
        icon: "MobilePhoneIcon"
      },
      {
        label: import_react_native15.Platform.select({
          android: Strings.CODENAME,
          ios: Strings.MACHINE_ID
        }),
        version: debugInfo.device.codename,
        icon: "TagIcon"
      }
    ];
    return /* @__PURE__ */ jsx(import_react_native15.ScrollView, {
      style: {
        flex: 1
      },
      contentContainerStyle: {
        paddingBottom: 38
      },
      children: /* @__PURE__ */ jsxs(Stack, {
        style: {
          paddingVertical: 24,
          paddingHorizontal: 12
        },
        spacing: 24,
        children: [
          /* @__PURE__ */ jsx(TableRowGroup, {
            title: Strings.VERSIONS,
            children: versions.map((v2) => /* @__PURE__ */ jsx(Version, {
              label: v2.label,
              version: v2.version,
              icon: v2.icon
            }))
          }),
          /* @__PURE__ */ jsx(TableRowGroup, {
            title: Strings.PLATFORM,
            children: platformInfo.map((p) => /* @__PURE__ */ jsx(Version, {
              label: p.label,
              version: p.version,
              icon: p.icon
            }))
          })
        ]
      })
    });
  }
  var import_react_native15;
  var init_About = __esm({
    "src/core/ui/settings/pages/General/About.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_i18n();
      init_settings3();
      init_Version();
      init_storage();
      init_debug();
      init_settings();
      init_components();
      import_react_native15 = __toESM(require_react_native());
    }
  });

  // src/lib/ui/alerts.ts
  var alerts_exports = {};
  __export(alerts_exports, {
    dismissAlert: () => dismissAlert,
    openAlert: () => openAlert
  });
  var openAlert, dismissAlert;
  var init_alerts = __esm({
    "src/lib/ui/alerts.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_lazy();
      init_metro();
      ({ openAlert, dismissAlert } = lazyDestructure(() => findByProps("openAlert", "dismissAlert")));
    }
  });

  // src/core/ui/settings/pages/General/index.tsx
  var General_exports = {};
  __export(General_exports, {
    default: () => General
  });
  function General() {
    useProxy(settings);
    var debugInfo = getDebugInfo();
    var navigation2 = NavigationNative.useNavigation();
    return /* @__PURE__ */ jsx(import_react_native16.ScrollView, {
      style: {
        flex: 1
      },
      contentContainerStyle: {
        paddingBottom: 38
      },
      children: /* @__PURE__ */ jsxs(Stack, {
        style: {
          paddingVertical: 24,
          paddingHorizontal: 12
        },
        spacing: 24,
        children: [
          /* @__PURE__ */ jsxs(TableRowGroup, {
            title: Strings.INFO,
            children: [
              /* @__PURE__ */ jsx(TableRow, {
                label: Strings.SCHAT,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: {
                    uri: si_default
                  }
                }),
                trailing: /* @__PURE__ */ jsx(TableRow.TrailingText, {
                  text: debugInfo.schat.version
                })
              }),
              /* @__PURE__ */ jsx(TableRow, {
                label: "Discord",
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("Discord")
                }),
                trailing: /* @__PURE__ */ jsx(TableRow.TrailingText, {
                  text: `${debugInfo.discord.version} (${debugInfo.discord.build})`
                })
              }),
              /* @__PURE__ */ jsx(TableRow, {
                arrow: true,
                label: Strings.ABOUT,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("CircleInformationIcon-primary")
                }),
                onPress: () => navigation2.push("SCHAT_CUSTOM_PAGE", {
                  title: Strings.ABOUT,
                  render: () => /* @__PURE__ */ jsx(About, {})
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs(TableRowGroup, {
            title: Strings.LINKS,
            children: [
              /* @__PURE__ */ jsx(TableRow, {
                arrow: true,
                label: Strings.DISCORD_SERVER,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("Discord")
                }),
                onPress: () => url.openDeeplink(DISCORD_SERVER)
              }),
              /* @__PURE__ */ jsx(TableRow, {
                arrow: true,
                label: Strings.GITHUB,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("img_account_sync_github_white")
                }),
                onPress: () => url.openURL(GITHUB)
              })
            ]
          }),
          /* @__PURE__ */ jsxs(TableRowGroup, {
            title: Strings.ACTIONS,
            children: [
              /* @__PURE__ */ jsx(TableRow, {
                label: Strings.RELOAD_DISCORD,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("RetryIcon")
                }),
                onPress: () => BundleUpdaterManager.reload()
              }),
              /* @__PURE__ */ jsx(TableSwitchRow, {
                label: "Safe Mode",
                subLabel: "Load SChat without loading add-ons",
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("ShieldIcon")
                }),
                value: isSafeMode(),
                onValueChange: (to) => {
                  toggleSafeMode2({
                    to,
                    reload: false
                  });
                  openAlert("schat-reload-safe-mode", /* @__PURE__ */ jsx(AlertModal, {
                    title: "Reload now?",
                    content: !to ? "All add-ons will load normally." : "All add-ons will be temporarily disabled upon reload.",
                    actions: /* @__PURE__ */ jsxs(AlertActions, {
                      children: [
                        /* @__PURE__ */ jsx(AlertActionButton, {
                          text: "Reload Now",
                          variant: "destructive",
                          onPress: () => BundleUpdaterManager.reload()
                        }),
                        /* @__PURE__ */ jsx(AlertActionButton, {
                          text: "Later",
                          variant: "secondary"
                        })
                      ]
                    })
                  }));
                }
              }),
              /* @__PURE__ */ jsx(TableSwitchRow, {
                label: Strings.DEVELOPER_SETTINGS,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("WrenchIcon")
                }),
                value: settings.developerSettings,
                onValueChange: (v2) => {
                  settings.developerSettings = v2;
                }
              })
            ]
          }),
          /* @__PURE__ */ jsx(TableRowGroup, {
            title: Strings.MISCELLANEOUS,
            children: /* @__PURE__ */ jsx(TableSwitchRow, {
              label: Strings.SETTINGS_ACTIVATE_DISCORD_EXPERIMENTS,
              subLabel: Strings.SETTINGS_ACTIVATE_DISCORD_EXPERIMENTS_DESC,
              icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                source: findAssetId("WrenchIcon")
              }),
              value: settings.enableDiscordDeveloperSettings,
              onValueChange: (v2) => {
                settings.enableDiscordDeveloperSettings = v2;
              }
            })
          })
        ]
      })
    });
  }
  var import_react_native16;
  var init_General = __esm({
    "src/core/ui/settings/pages/General/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_safeMode();
      init_i18n();
      init_settings3();
      init_About();
      init_storage();
      init_assets();
      init_debug();
      init_modules();
      init_settings();
      init_alerts();
      init_constants();
      init_common();
      init_components();
      import_react_native16 = __toESM(require_react_native());
    }
  });

  // src/lib/utils/isValidHttpUrl.ts
  function isValidHttpUrl(input) {
    var url2;
    try {
      url2 = new URL(input);
    } catch (e) {
      return false;
    }
    return url2.protocol === "http:" || url2.protocol === "https:";
  }
  var init_isValidHttpUrl = __esm({
    "src/lib/utils/isValidHttpUrl.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // node_modules/.pnpm/fuzzysort@3.0.2/node_modules/fuzzysort/fuzzysort.js
  var require_fuzzysort = __commonJS({
    "node_modules/.pnpm/fuzzysort@3.0.2/node_modules/fuzzysort/fuzzysort.js"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_call_super();
      init_class_call_check();
      init_create_class();
      init_inherits();
      init_wrap_native_super();
      ((root, UMD) => {
        if (typeof define === "function" && define.amd)
          define([], UMD);
        else if (typeof module === "object" && module.exports)
          module.exports = UMD();
        else
          root["fuzzysort"] = UMD();
      })(exports, (_2) => {
        "use strict";
        var single = (search, target) => {
          if (!search || !target)
            return NULL;
          var preparedSearch = getPreparedSearch(search);
          if (!isPrepared(target))
            target = getPrepared(target);
          var searchBitflags = preparedSearch.bitflags;
          if ((searchBitflags & target._bitflags) !== searchBitflags)
            return NULL;
          return algorithm(preparedSearch, target);
        };
        var go = (search, targets, options) => {
          if (!search)
            return options?.all ? all(targets, options) : noResults;
          var preparedSearch = getPreparedSearch(search);
          var searchBitflags = preparedSearch.bitflags;
          var containsSpace = preparedSearch.containsSpace;
          var threshold = denormalizeScore(options?.threshold || 0);
          var limit = options?.limit || INFINITY;
          var resultsLen = 0;
          var limitedCount = 0;
          var targetsLen = targets.length;
          function push_result(result2) {
            if (resultsLen < limit) {
              q3.add(result2);
              ++resultsLen;
            } else {
              ++limitedCount;
              if (result2._score > q3.peek()._score)
                q3.replaceTop(result2);
            }
          }
          if (options?.key) {
            var key = options.key;
            for (var i = 0; i < targetsLen; ++i) {
              var obj = targets[i];
              var target = getValue(obj, key);
              if (!target)
                continue;
              if (!isPrepared(target))
                target = getPrepared(target);
              if ((searchBitflags & target._bitflags) !== searchBitflags)
                continue;
              var result = algorithm(preparedSearch, target);
              if (result === NULL)
                continue;
              if (result._score < threshold)
                continue;
              result.obj = obj;
              push_result(result);
            }
          } else if (options?.keys) {
            var keys = options.keys;
            var keysLen = keys.length;
            outer:
              for (var i = 0; i < targetsLen; ++i) {
                var obj = targets[i];
                {
                  var keysBitflags = 0;
                  for (var keyI = 0; keyI < keysLen; ++keyI) {
                    var key = keys[keyI];
                    var target = getValue(obj, key);
                    if (!target) {
                      tmpTargets[keyI] = noTarget;
                      continue;
                    }
                    if (!isPrepared(target))
                      target = getPrepared(target);
                    tmpTargets[keyI] = target;
                    keysBitflags |= target._bitflags;
                  }
                  if ((searchBitflags & keysBitflags) !== searchBitflags)
                    continue;
                }
                if (containsSpace)
                  for (var i1 = 0; i1 < preparedSearch.spaceSearches.length; i1++)
                    keysSpacesBestScores[i1] = NEGATIVE_INFINITY;
                for (var keyI = 0; keyI < keysLen; ++keyI) {
                  target = tmpTargets[keyI];
                  if (target === noTarget) {
                    tmpResults[keyI] = noTarget;
                    continue;
                  }
                  tmpResults[keyI] = algorithm(
                    preparedSearch,
                    target,
                    /*allowSpaces=*/
                    false,
                    /*allowPartialMatch=*/
                    containsSpace
                  );
                  if (tmpResults[keyI] === NULL) {
                    tmpResults[keyI] = noTarget;
                    continue;
                  }
                  if (containsSpace)
                    for (var i2 = 0; i2 < preparedSearch.spaceSearches.length; i2++) {
                      if (allowPartialMatchScores[i2] > -1e3) {
                        if (keysSpacesBestScores[i2] > NEGATIVE_INFINITY) {
                          var tmp = (keysSpacesBestScores[i2] + allowPartialMatchScores[i2]) / 4;
                          if (tmp > keysSpacesBestScores[i2])
                            keysSpacesBestScores[i2] = tmp;
                        }
                      }
                      if (allowPartialMatchScores[i2] > keysSpacesBestScores[i2])
                        keysSpacesBestScores[i2] = allowPartialMatchScores[i2];
                    }
                }
                if (containsSpace) {
                  for (var i3 = 0; i3 < preparedSearch.spaceSearches.length; i3++) {
                    if (keysSpacesBestScores[i3] === NEGATIVE_INFINITY)
                      continue outer;
                  }
                } else {
                  var hasAtLeast1Match = false;
                  for (var i4 = 0; i4 < keysLen; i4++) {
                    if (tmpResults[i4]._score !== NEGATIVE_INFINITY) {
                      hasAtLeast1Match = true;
                      break;
                    }
                  }
                  if (!hasAtLeast1Match)
                    continue;
                }
                var objResults = new KeysResult(keysLen);
                for (var i5 = 0; i5 < keysLen; i5++) {
                  objResults[i5] = tmpResults[i5];
                }
                if (containsSpace) {
                  var score = 0;
                  for (var i6 = 0; i6 < preparedSearch.spaceSearches.length; i6++)
                    score += keysSpacesBestScores[i6];
                } else {
                  var score = NEGATIVE_INFINITY;
                  for (var i7 = 0; i7 < keysLen; i7++) {
                    var result = objResults[i7];
                    if (result._score > -1e3) {
                      if (score > NEGATIVE_INFINITY) {
                        var tmp = (score + result._score) / 4;
                        if (tmp > score)
                          score = tmp;
                      }
                    }
                    if (result._score > score)
                      score = result._score;
                  }
                }
                objResults.obj = obj;
                objResults._score = score;
                if (options?.scoreFn) {
                  score = options.scoreFn(objResults);
                  if (!score)
                    continue;
                  score = denormalizeScore(score);
                  objResults._score = score;
                }
                if (score < threshold)
                  continue;
                push_result(objResults);
              }
          } else {
            for (var i = 0; i < targetsLen; ++i) {
              var target = targets[i];
              if (!target)
                continue;
              if (!isPrepared(target))
                target = getPrepared(target);
              if ((searchBitflags & target._bitflags) !== searchBitflags)
                continue;
              var result = algorithm(preparedSearch, target);
              if (result === NULL)
                continue;
              if (result._score < threshold)
                continue;
              push_result(result);
            }
          }
          if (resultsLen === 0)
            return noResults;
          var results = new Array(resultsLen);
          for (var i = resultsLen - 1; i >= 0; --i)
            results[i] = q3.poll();
          results.total = resultsLen + limitedCount;
          return results;
        };
        var highlight = (result, open = "<b>", close = "</b>") => {
          var callback = typeof open === "function" ? open : void 0;
          var target = result.target;
          var targetLen = target.length;
          var indexes = result.indexes;
          var highlighted = "";
          var matchI = 0;
          var indexesI = 0;
          var opened = false;
          var parts = [];
          for (var i = 0; i < targetLen; ++i) {
            var char = target[i];
            if (indexes[indexesI] === i) {
              ++indexesI;
              if (!opened) {
                opened = true;
                if (callback) {
                  parts.push(highlighted);
                  highlighted = "";
                } else {
                  highlighted += open;
                }
              }
              if (indexesI === indexes.length) {
                if (callback) {
                  highlighted += char;
                  parts.push(callback(highlighted, matchI++));
                  highlighted = "";
                  parts.push(target.substr(i + 1));
                } else {
                  highlighted += char + close + target.substr(i + 1);
                }
                break;
              }
            } else {
              if (opened) {
                opened = false;
                if (callback) {
                  parts.push(callback(highlighted, matchI++));
                  highlighted = "";
                } else {
                  highlighted += close;
                }
              }
            }
            highlighted += char;
          }
          return callback ? parts : highlighted;
        };
        var prepare = (target) => {
          if (typeof target === "number")
            target = "" + target;
          else if (typeof target !== "string")
            target = "";
          var info = prepareLowerInfo(target);
          return new_result(target, {
            _targetLower: info._lower,
            _targetLowerCodes: info.lowerCodes,
            _bitflags: info.bitflags
          });
        };
        var cleanup = () => {
          preparedCache.clear();
          preparedSearchCache.clear();
        };
        var Result = /* @__PURE__ */ function() {
          function Result2() {
            _class_call_check(this, Result2);
          }
          _create_class(Result2, [
            {
              key: "indexes",
              get: function get() {
                return this._indexes.slice(0, this._indexes.len).sort((a, b3) => a - b3);
              }
            },
            {
              key: "indexes",
              set: function set(indexes) {
                return this._indexes = indexes;
              }
            },
            {
              key: "highlight",
              value: function value(open, close) {
                return highlight(this, open, close);
              }
            },
            {
              key: "score",
              get: function get() {
                return normalizeScore(this._score);
              }
            },
            {
              key: "score",
              set: function set(score) {
                this._score = denormalizeScore(score);
              }
            }
          ]);
          return Result2;
        }();
        var KeysResult = /* @__PURE__ */ function(Array1) {
          _inherits(KeysResult2, Array1);
          function KeysResult2() {
            _class_call_check(this, KeysResult2);
            return _call_super(this, KeysResult2, arguments);
          }
          _create_class(KeysResult2, [
            {
              key: "score",
              get: function get() {
                return normalizeScore(this._score);
              }
            },
            {
              key: "score",
              set: function set(score) {
                this._score = denormalizeScore(score);
              }
            }
          ]);
          return KeysResult2;
        }(_wrap_native_super(Array));
        var new_result = (target, options) => {
          var result = new Result();
          result["target"] = target;
          result["obj"] = options.obj ?? NULL;
          result._score = options._score ?? NEGATIVE_INFINITY;
          result._indexes = options._indexes ?? [];
          result._targetLower = options._targetLower ?? "";
          result._targetLowerCodes = options._targetLowerCodes ?? NULL;
          result._nextBeginningIndexes = options._nextBeginningIndexes ?? NULL;
          result._bitflags = options._bitflags ?? 0;
          return result;
        };
        var normalizeScore = (score) => {
          if (score === NEGATIVE_INFINITY)
            return 0;
          if (score > 1)
            return score;
          return Math.E ** (((-score + 1) ** 0.04307 - 1) * -2);
        };
        var denormalizeScore = (normalizedScore) => {
          if (normalizedScore === 0)
            return NEGATIVE_INFINITY;
          if (normalizedScore > 1)
            return normalizedScore;
          return 1 - Math.pow(Math.log(normalizedScore) / -2 + 1, 1 / 0.04307);
        };
        var prepareSearch = (search) => {
          if (typeof search === "number")
            search = "" + search;
          else if (typeof search !== "string")
            search = "";
          search = search.trim();
          var info = prepareLowerInfo(search);
          var spaceSearches = [];
          if (info.containsSpace) {
            var searches = search.split(/\s+/);
            searches = [
              ...new Set(searches)
            ];
            for (var i = 0; i < searches.length; i++) {
              if (searches[i] === "")
                continue;
              var _info = prepareLowerInfo(searches[i]);
              spaceSearches.push({
                lowerCodes: _info.lowerCodes,
                _lower: searches[i].toLowerCase(),
                containsSpace: false
              });
            }
          }
          return {
            lowerCodes: info.lowerCodes,
            _lower: info._lower,
            containsSpace: info.containsSpace,
            bitflags: info.bitflags,
            spaceSearches
          };
        };
        var getPrepared = (target) => {
          if (target.length > 999)
            return prepare(target);
          var targetPrepared = preparedCache.get(target);
          if (targetPrepared !== void 0)
            return targetPrepared;
          targetPrepared = prepare(target);
          preparedCache.set(target, targetPrepared);
          return targetPrepared;
        };
        var getPreparedSearch = (search) => {
          if (search.length > 999)
            return prepareSearch(search);
          var searchPrepared = preparedSearchCache.get(search);
          if (searchPrepared !== void 0)
            return searchPrepared;
          searchPrepared = prepareSearch(search);
          preparedSearchCache.set(search, searchPrepared);
          return searchPrepared;
        };
        var all = (targets, options) => {
          var results = [];
          results.total = targets.length;
          var limit = options?.limit || INFINITY;
          if (options?.key) {
            for (var i = 0; i < targets.length; i++) {
              var obj = targets[i];
              var target = getValue(obj, options.key);
              if (target == NULL)
                continue;
              if (!isPrepared(target))
                target = getPrepared(target);
              var result = new_result(target.target, {
                _score: target._score,
                obj
              });
              results.push(result);
              if (results.length >= limit)
                return results;
            }
          } else if (options?.keys) {
            for (var i = 0; i < targets.length; i++) {
              var obj = targets[i];
              var objResults = new KeysResult(options.keys.length);
              for (var keyI = options.keys.length - 1; keyI >= 0; --keyI) {
                var target = getValue(obj, options.keys[keyI]);
                if (!target) {
                  objResults[keyI] = noTarget;
                  continue;
                }
                if (!isPrepared(target))
                  target = getPrepared(target);
                target._score = NEGATIVE_INFINITY;
                target._indexes.len = 0;
                objResults[keyI] = target;
              }
              objResults.obj = obj;
              objResults._score = NEGATIVE_INFINITY;
              results.push(objResults);
              if (results.length >= limit)
                return results;
            }
          } else {
            for (var i = 0; i < targets.length; i++) {
              var target = targets[i];
              if (target == NULL)
                continue;
              if (!isPrepared(target))
                target = getPrepared(target);
              target._score = NEGATIVE_INFINITY;
              target._indexes.len = 0;
              results.push(target);
              if (results.length >= limit)
                return results;
            }
          }
          return results;
        };
        var algorithm = (preparedSearch, prepared, allowSpaces = false, allowPartialMatch = false) => {
          if (allowSpaces === false && preparedSearch.containsSpace)
            return algorithmSpaces(preparedSearch, prepared, allowPartialMatch);
          var searchLower = preparedSearch._lower;
          var searchLowerCodes = preparedSearch.lowerCodes;
          var searchLowerCode = searchLowerCodes[0];
          var targetLowerCodes = prepared._targetLowerCodes;
          var searchLen = searchLowerCodes.length;
          var targetLen = targetLowerCodes.length;
          var searchI = 0;
          var targetI = 0;
          var matchesSimpleLen = 0;
          for (; ; ) {
            var isMatch = searchLowerCode === targetLowerCodes[targetI];
            if (isMatch) {
              matchesSimple[matchesSimpleLen++] = targetI;
              ++searchI;
              if (searchI === searchLen)
                break;
              searchLowerCode = searchLowerCodes[searchI];
            }
            ++targetI;
            if (targetI >= targetLen)
              return NULL;
          }
          var searchI = 0;
          var successStrict = false;
          var matchesStrictLen = 0;
          var nextBeginningIndexes = prepared._nextBeginningIndexes;
          if (nextBeginningIndexes === NULL)
            nextBeginningIndexes = prepared._nextBeginningIndexes = prepareNextBeginningIndexes(prepared.target);
          targetI = matchesSimple[0] === 0 ? 0 : nextBeginningIndexes[matchesSimple[0] - 1];
          var backtrackCount = 0;
          if (targetI !== targetLen)
            for (; ; ) {
              if (targetI >= targetLen) {
                if (searchI <= 0)
                  break;
                ++backtrackCount;
                if (backtrackCount > 200)
                  break;
                --searchI;
                var lastMatch = matchesStrict[--matchesStrictLen];
                targetI = nextBeginningIndexes[lastMatch];
              } else {
                var isMatch = searchLowerCodes[searchI] === targetLowerCodes[targetI];
                if (isMatch) {
                  matchesStrict[matchesStrictLen++] = targetI;
                  ++searchI;
                  if (searchI === searchLen) {
                    successStrict = true;
                    break;
                  }
                  ++targetI;
                } else {
                  targetI = nextBeginningIndexes[targetI];
                }
              }
            }
          var substringIndex = searchLen <= 1 ? -1 : prepared._targetLower.indexOf(searchLower, matchesSimple[0]);
          var isSubstring = !!~substringIndex;
          var isSubstringBeginning = !isSubstring ? false : substringIndex === 0 || prepared._nextBeginningIndexes[substringIndex - 1] === substringIndex;
          if (isSubstring && !isSubstringBeginning) {
            for (var i = 0; i < nextBeginningIndexes.length; i = nextBeginningIndexes[i]) {
              if (i <= substringIndex)
                continue;
              for (var s = 0; s < searchLen; s++)
                if (searchLowerCodes[s] !== prepared._targetLowerCodes[i + s])
                  break;
              if (s === searchLen) {
                substringIndex = i;
                isSubstringBeginning = true;
                break;
              }
            }
          }
          var calculateScore = (matches) => {
            var score2 = 0;
            var extraMatchGroupCount = 0;
            for (var i2 = 1; i2 < searchLen; ++i2) {
              if (matches[i2] - matches[i2 - 1] !== 1) {
                score2 -= matches[i2];
                ++extraMatchGroupCount;
              }
            }
            var unmatchedDistance = matches[searchLen - 1] - matches[0] - (searchLen - 1);
            score2 -= (12 + unmatchedDistance) * extraMatchGroupCount;
            if (matches[0] !== 0)
              score2 -= matches[0] * matches[0] * 0.2;
            if (!successStrict) {
              score2 *= 1e3;
            } else {
              var uniqueBeginningIndexes = 1;
              for (var i2 = nextBeginningIndexes[0]; i2 < targetLen; i2 = nextBeginningIndexes[i2])
                ++uniqueBeginningIndexes;
              if (uniqueBeginningIndexes > 24)
                score2 *= (uniqueBeginningIndexes - 24) * 10;
            }
            score2 -= (targetLen - searchLen) / 2;
            if (isSubstring)
              score2 /= 1 + searchLen * searchLen * 1;
            if (isSubstringBeginning)
              score2 /= 1 + searchLen * searchLen * 1;
            score2 -= (targetLen - searchLen) / 2;
            return score2;
          };
          if (!successStrict) {
            if (isSubstring)
              for (var i = 0; i < searchLen; ++i)
                matchesSimple[i] = substringIndex + i;
            var matchesBest = matchesSimple;
            var score = calculateScore(matchesBest);
          } else {
            if (isSubstringBeginning) {
              for (var i = 0; i < searchLen; ++i)
                matchesSimple[i] = substringIndex + i;
              var matchesBest = matchesSimple;
              var score = calculateScore(matchesSimple);
            } else {
              var matchesBest = matchesStrict;
              var score = calculateScore(matchesStrict);
            }
          }
          prepared._score = score;
          for (var i = 0; i < searchLen; ++i)
            prepared._indexes[i] = matchesBest[i];
          prepared._indexes.len = searchLen;
          var result = new Result();
          result.target = prepared.target;
          result._score = prepared._score;
          result._indexes = prepared._indexes;
          return result;
        };
        var algorithmSpaces = (preparedSearch, target, allowPartialMatch) => {
          var seen_indexes = /* @__PURE__ */ new Set();
          var score = 0;
          var result = NULL;
          var first_seen_index_last_search = 0;
          var searches = preparedSearch.spaceSearches;
          var searchesLen = searches.length;
          var changeslen = 0;
          var resetNextBeginningIndexes = () => {
            for (var i3 = changeslen - 1; i3 >= 0; i3--)
              target._nextBeginningIndexes[nextBeginningIndexesChanges[i3 * 2 + 0]] = nextBeginningIndexesChanges[i3 * 2 + 1];
          };
          var hasAtLeast1Match = false;
          for (var i = 0; i < searchesLen; ++i) {
            allowPartialMatchScores[i] = NEGATIVE_INFINITY;
            var search = searches[i];
            result = algorithm(search, target);
            if (allowPartialMatch) {
              if (result === NULL)
                continue;
              hasAtLeast1Match = true;
            } else {
              if (result === NULL) {
                resetNextBeginningIndexes();
                return NULL;
              }
            }
            var isTheLastSearch = i === searchesLen - 1;
            if (!isTheLastSearch) {
              var indexes = result._indexes;
              var indexesIsConsecutiveSubstring = true;
              for (var i1 = 0; i1 < indexes.len - 1; i1++) {
                if (indexes[i1 + 1] - indexes[i1] !== 1) {
                  indexesIsConsecutiveSubstring = false;
                  break;
                }
              }
              if (indexesIsConsecutiveSubstring) {
                var newBeginningIndex = indexes[indexes.len - 1] + 1;
                var toReplace = target._nextBeginningIndexes[newBeginningIndex - 1];
                for (var i2 = newBeginningIndex - 1; i2 >= 0; i2--) {
                  if (toReplace !== target._nextBeginningIndexes[i2])
                    break;
                  target._nextBeginningIndexes[i2] = newBeginningIndex;
                  nextBeginningIndexesChanges[changeslen * 2 + 0] = i2;
                  nextBeginningIndexesChanges[changeslen * 2 + 1] = toReplace;
                  changeslen++;
                }
              }
            }
            score += result._score / searchesLen;
            allowPartialMatchScores[i] = result._score / searchesLen;
            if (result._indexes[0] < first_seen_index_last_search) {
              score -= (first_seen_index_last_search - result._indexes[0]) * 2;
            }
            first_seen_index_last_search = result._indexes[0];
            for (var j = 0; j < result._indexes.len; ++j)
              seen_indexes.add(result._indexes[j]);
          }
          if (allowPartialMatch && !hasAtLeast1Match)
            return NULL;
          resetNextBeginningIndexes();
          var allowSpacesResult = algorithm(
            preparedSearch,
            target,
            /*allowSpaces=*/
            true
          );
          if (allowSpacesResult !== NULL && allowSpacesResult._score > score) {
            if (allowPartialMatch) {
              for (var i = 0; i < searchesLen; ++i) {
                allowPartialMatchScores[i] = allowSpacesResult._score / searchesLen;
              }
            }
            return allowSpacesResult;
          }
          if (allowPartialMatch)
            result = target;
          result._score = score;
          var i = 0;
          for (var index of seen_indexes)
            result._indexes[i++] = index;
          result._indexes.len = i;
          return result;
        };
        var prepareLowerInfo = (str) => {
          var strLen = str.length;
          var lower = str.toLowerCase();
          var lowerCodes = [];
          var bitflags = 0;
          var containsSpace = false;
          for (var i = 0; i < strLen; ++i) {
            var lowerCode = lowerCodes[i] = lower.charCodeAt(i);
            if (lowerCode === 32) {
              containsSpace = true;
              continue;
            }
            var bit = lowerCode >= 97 && lowerCode <= 122 ? lowerCode - 97 : lowerCode >= 48 && lowerCode <= 57 ? 26 : lowerCode <= 127 ? 30 : 31;
            bitflags |= 1 << bit;
          }
          return {
            lowerCodes,
            bitflags,
            containsSpace,
            _lower: lower
          };
        };
        var prepareBeginningIndexes = (target) => {
          var targetLen = target.length;
          var beginningIndexes = [];
          var beginningIndexesLen = 0;
          var wasUpper = false;
          var wasAlphanum = false;
          for (var i = 0; i < targetLen; ++i) {
            var targetCode = target.charCodeAt(i);
            var isUpper = targetCode >= 65 && targetCode <= 90;
            var isAlphanum = isUpper || targetCode >= 97 && targetCode <= 122 || targetCode >= 48 && targetCode <= 57;
            var isBeginning = isUpper && !wasUpper || !wasAlphanum || !isAlphanum;
            wasUpper = isUpper;
            wasAlphanum = isAlphanum;
            if (isBeginning)
              beginningIndexes[beginningIndexesLen++] = i;
          }
          return beginningIndexes;
        };
        var prepareNextBeginningIndexes = (target) => {
          var targetLen = target.length;
          var beginningIndexes = prepareBeginningIndexes(target);
          var nextBeginningIndexes = [];
          var lastIsBeginning = beginningIndexes[0];
          var lastIsBeginningI = 0;
          for (var i = 0; i < targetLen; ++i) {
            if (lastIsBeginning > i) {
              nextBeginningIndexes[i] = lastIsBeginning;
            } else {
              lastIsBeginning = beginningIndexes[++lastIsBeginningI];
              nextBeginningIndexes[i] = lastIsBeginning === void 0 ? targetLen : lastIsBeginning;
            }
          }
          return nextBeginningIndexes;
        };
        var preparedCache = /* @__PURE__ */ new Map();
        var preparedSearchCache = /* @__PURE__ */ new Map();
        var matchesSimple = [];
        var matchesStrict = [];
        var nextBeginningIndexesChanges = [];
        var keysSpacesBestScores = [];
        var allowPartialMatchScores = [];
        var tmpTargets = [];
        var tmpResults = [];
        var getValue = (obj, prop) => {
          var tmp = obj[prop];
          if (tmp !== void 0)
            return tmp;
          if (typeof prop === "function")
            return prop(obj);
          var segs = prop;
          if (!Array.isArray(prop))
            segs = prop.split(".");
          var len = segs.length;
          var i = -1;
          while (obj && ++i < len)
            obj = obj[segs[i]];
          return obj;
        };
        var isPrepared = (x2) => {
          return typeof x2 === "object" && typeof x2._bitflags === "number";
        };
        var INFINITY = Infinity;
        var NEGATIVE_INFINITY = -INFINITY;
        var noResults = [];
        noResults.total = 0;
        var NULL = null;
        var noTarget = prepare("");
        var fastpriorityqueue = (r) => {
          var e = [], o = 0, a = {}, v2 = (r2) => {
            for (var a2 = 0, v3 = e[a2], c2 = 1; c2 < o; ) {
              var s = c2 + 1;
              a2 = c2, s < o && e[s]._score < e[c2]._score && (a2 = s), e[a2 - 1 >> 1] = e[a2], c2 = 1 + (a2 << 1);
            }
            for (var f = a2 - 1 >> 1; a2 > 0 && v3._score < e[f]._score; f = (a2 = f) - 1 >> 1)
              e[a2] = e[f];
            e[a2] = v3;
          };
          return a.add = (r2) => {
            var a2 = o;
            e[o++] = r2;
            for (var v3 = a2 - 1 >> 1; a2 > 0 && r2._score < e[v3]._score; v3 = (a2 = v3) - 1 >> 1)
              e[a2] = e[v3];
            e[a2] = r2;
          }, a.poll = (r2) => {
            if (0 !== o) {
              var a2 = e[0];
              return e[0] = e[--o], v2(), a2;
            }
          }, a.peek = (r2) => {
            if (0 !== o)
              return e[0];
          }, a.replaceTop = (r2) => {
            e[0] = r2, v2();
          }, a;
        };
        var q3 = fastpriorityqueue();
        return {
          "single": single,
          "go": go,
          "prepare": prepare,
          "cleanup": cleanup
        };
      });
    }
  });

  // src/core/ui/components/AddonPage.tsx
  function InputAlert(props) {
    var [value, setValue] = React.useState("");
    var [error, setError] = React.useState("");
    var [isFetching, setIsFetching] = React.useState(false);
    function onConfirmWrapper() {
      setIsFetching(true);
      props.fetchFn(value).then(() => dismissAlert("AddonInputAlert")).catch((e) => e instanceof Error ? setError(e.message) : String(e)).finally(() => setIsFetching(false));
    }
    return /* @__PURE__ */ jsx(AlertModal, {
      title: props.label,
      content: "Type in the source URL you want to install from:",
      extraContent: /* @__PURE__ */ jsxs(Stack, {
        style: {
          marginTop: -12
        },
        children: [
          /* @__PURE__ */ jsx(TextInput, {
            autoFocus: true,
            isClearable: true,
            value,
            onChange: (v2) => {
              setValue(v2);
              if (error)
                setError("");
            },
            returnKeyType: "done",
            onSubmitEditing: onConfirmWrapper,
            state: error ? "error" : void 0,
            errorMessage: error || void 0
          }),
          /* @__PURE__ */ jsx(import_react_native17.ScrollView, {
            horizontal: true,
            showsHorizontalScrollIndicator: false,
            style: {
              gap: 8
            },
            children: /* @__PURE__ */ jsx(Button, {
              size: "sm",
              variant: "tertiary",
              text: "Import from clipboard",
              icon: findAssetId("ClipboardListIcon"),
              onPress: () => clipboard.getString().then((str) => setValue(str))
            })
          })
        ]
      }),
      actions: /* @__PURE__ */ jsxs(Stack, {
        children: [
          /* @__PURE__ */ jsx(Button, {
            loading: isFetching,
            text: "Install",
            variant: "primary",
            disabled: !value || !isValidHttpUrl(value),
            onPress: onConfirmWrapper
          }),
          /* @__PURE__ */ jsx(AlertActionButton, {
            disabled: isFetching,
            text: "Cancel",
            variant: "secondary"
          })
        ]
      })
    });
  }
  function AddonPage({ CardComponent, ...props }) {
    var [search, setSearch] = React.useState("");
    var [sortFn, setSortFn] = React.useState(() => null);
    var { bottom: bottomInset } = useSafeAreaInsets();
    var navigation2 = NavigationNative.useNavigation();
    (0, import_react3.useEffect)(() => {
      if (props.OptionsActionSheetComponent) {
        navigation2.setOptions({
          headerRight: () => /* @__PURE__ */ jsx(IconButton, {
            size: "sm",
            variant: "secondary",
            icon: findAssetId("MoreHorizontalIcon"),
            onPress: () => showSheet("AddonMoreSheet", props.OptionsActionSheetComponent)
          })
        });
      }
    }, [
      navigation2
    ]);
    var results = (0, import_react3.useMemo)(() => {
      var values = props.items;
      if (props.resolveItem)
        values = values.map(props.resolveItem).filter(isNotNil);
      var items = values.filter((i) => isNotNil(i) && typeof i === "object");
      if (!search && sortFn)
        items.sort(sortFn);
      return import_fuzzysort.default.go(search, items, {
        keys: props.searchKeywords,
        all: true
      });
    }, [
      props.items,
      sortFn,
      search
    ]);
    var onInstallPress = (0, import_react3.useCallback)(() => {
      if (!props.installAction)
        return () => {
        };
      var { label, onPress, fetchFn } = props.installAction;
      if (fetchFn) {
        openAlert("AddonInputAlert", /* @__PURE__ */ jsx(InputAlert, {
          label: label ?? "Install",
          fetchFn
        }));
      } else {
        onPress?.();
      }
    }, []);
    if (results.length === 0 && !search) {
      return /* @__PURE__ */ jsxs(import_react_native17.View, {
        style: {
          gap: 32,
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ jsxs(import_react_native17.View, {
            style: {
              gap: 8,
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx(import_react_native17.Image, {
                source: findAssetId("empty_quick_switcher")
              }),
              /* @__PURE__ */ jsx(Text, {
                variant: "text-lg/semibold",
                color: "text-normal",
                children: "Oops! Nothing to see here\u2026 yet!"
              })
            ]
          }),
          /* @__PURE__ */ jsx(Button, {
            size: "lg",
            icon: findAssetId("DownloadIcon"),
            text: props.installAction?.label ?? "Install",
            onPress: onInstallPress
          })
        ]
      });
    }
    var headerElement = /* @__PURE__ */ jsxs(import_react_native17.View, {
      style: {
        paddingBottom: 8
      },
      children: [
        settings.safeMode?.enabled && /* @__PURE__ */ jsxs(import_react_native17.View, {
          style: {
            marginBottom: 10
          },
          children: [
            /* @__PURE__ */ jsx(HelpMessage, {
              messageType: 0,
              children: props.safeModeHint?.message
            }),
            props.safeModeHint?.footer
          ]
        }),
        /* @__PURE__ */ jsxs(import_react_native17.View, {
          style: {
            flexDirection: "row",
            gap: 8
          },
          children: [
            /* @__PURE__ */ jsx(Search_default, {
              style: {
                flexGrow: 1
              },
              isRound: !!props.sortOptions,
              onChangeText: (v2) => setSearch(v2)
            }),
            props.sortOptions && /* @__PURE__ */ jsx(IconButton, {
              icon: findAssetId("ic_forum_channel_sort_order_24px"),
              variant: "tertiary",
              disabled: !!search,
              onPress: () => showSimpleActionSheet({
                key: "AddonListSortOptions",
                header: {
                  title: "Sort Options",
                  onClose: () => hideActionSheet("AddonListSortOptions")
                },
                options: Object.entries(props.sortOptions).map(([name, fn]) => ({
                  label: name,
                  onPress: () => setSortFn(() => fn)
                }))
              })
            })
          ]
        }),
        props.ListHeaderComponent && /* @__PURE__ */ jsx(props.ListHeaderComponent, {})
      ]
    });
    return /* @__PURE__ */ jsxs(ErrorBoundary, {
      children: [
        /* @__PURE__ */ jsx(FlashList, {
          data: results,
          extraData: search,
          estimatedItemSize: 136,
          ListHeaderComponent: headerElement,
          ListEmptyComponent: () => /* @__PURE__ */ jsxs(import_react_native17.View, {
            style: {
              gap: 12,
              padding: 12,
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx(import_react_native17.Image, {
                source: findAssetId("devices_not_found")
              }),
              /* @__PURE__ */ jsx(Text, {
                variant: "text-lg/semibold",
                color: "text-normal",
                children: "Hmmm... could not find that!"
              })
            ]
          }),
          contentContainerStyle: {
            padding: 8,
            paddingHorizontal: 12,
            paddingBottom: 90
          },
          ItemSeparatorComponent: () => /* @__PURE__ */ jsx(import_react_native17.View, {
            style: {
              height: 8
            }
          }),
          ListFooterComponent: props.ListFooterComponent,
          renderItem: ({ item }) => /* @__PURE__ */ jsx(CardComponent, {
            item: item.obj,
            result: item
          })
        }),
        props.installAction && /* @__PURE__ */ jsx(FloatingActionButton, {
          positionBottom: bottomInset + 8,
          icon: findAssetId("PlusLargeIcon"),
          onPress: onInstallPress
        })
      ]
    });
  }
  var import_fuzzysort, import_react3, import_react_native17, showSimpleActionSheet, hideActionSheet;
  var init_AddonPage = __esm({
    "src/core/ui/components/AddonPage.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_assets();
      init_settings();
      init_alerts();
      init_sheets();
      init_isValidHttpUrl();
      init_lazy();
      init_metro();
      init_common();
      init_components();
      init_components2();
      init_dist();
      import_fuzzysort = __toESM(require_fuzzysort());
      import_react3 = __toESM(require_react());
      import_react_native17 = __toESM(require_react_native());
      ({ showSimpleActionSheet, hideActionSheet } = lazyDestructure(() => findByProps("showSimpleActionSheet")));
    }
  });

  // src/core/ui/settings/pages/Plugins/usePluginCardStyles.ts
  var usePluginCardStyles;
  var init_usePluginCardStyles = __esm({
    "src/core/ui/settings/pages/Plugins/usePluginCardStyles.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_common();
      init_styles();
      usePluginCardStyles = createStyles({
        smallIcon: {
          tintColor: tokens.colors.LOGO_PRIMARY,
          height: 18,
          width: 18
        },
        badgeIcon: {
          tintColor: tokens.colors.LOGO_PRIMARY,
          height: 12,
          width: 12
        },
        badgesContainer: {
          flexWrap: "wrap",
          flexDirection: "row",
          gap: 6,
          borderRadius: 6,
          padding: 4
        }
      });
    }
  });

  // src/core/ui/settings/pages/Plugins/components/PluginCard.tsx
  function getHighlightColor() {
    return (0, import_chroma_js4.default)(tokens.unsafe_rawColors.YELLOW_300).alpha(0.3).hex();
  }
  function Title() {
    var styles = usePluginCardStyles();
    var { plugin, result } = useCardContext();
    var highlightedNode = result[0].highlight((m2, i) => /* @__PURE__ */ jsx(Text, {
      style: {
        backgroundColor: getHighlightColor()
      },
      children: m2
    }, i));
    var icon = plugin.icon && findAssetId(plugin.icon);
    var textNode = /* @__PURE__ */ jsx(Text, {
      numberOfLines: 1,
      variant: "heading-lg/semibold",
      children: highlightedNode.length ? highlightedNode : plugin.name
    });
    return /* @__PURE__ */ jsxs(import_react_native18.View, {
      style: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6
      },
      children: [
        icon && /* @__PURE__ */ jsx(import_react_native18.Image, {
          style: styles.smallIcon,
          source: icon
        }),
        textNode
      ]
    });
  }
  function Authors() {
    var { plugin, result } = useCardContext();
    var styles = usePluginCardStyles();
    if (!plugin.authors)
      return null;
    var highlightedNode = result[2].highlight((m2, i) => /* @__PURE__ */ jsx(Text, {
      style: {
        backgroundColor: getHighlightColor()
      },
      children: m2
    }, i));
    var badges = plugin.getBadges();
    var authorText = highlightedNode.length > 0 ? highlightedNode : plugin.authors.map((a) => a.name).join(", ");
    return /* @__PURE__ */ jsxs(import_react_native18.View, {
      style: {
        flexDirection: "row",
        flexWrap: "wrap",
        flexShrink: 1,
        gap: 4
      },
      children: [
        /* @__PURE__ */ jsxs(Text, {
          variant: "text-sm/semibold",
          color: "text-muted",
          children: [
            "by ",
            authorText
          ]
        }),
        badges.length > 0 && /* @__PURE__ */ jsx(import_react_native18.View, {
          style: styles.badgesContainer,
          children: badges.map((b3, i) => /* @__PURE__ */ jsx(import_react_native18.Image, {
            source: b3.source,
            style: styles.badgeIcon
          }, i))
        })
      ]
    });
  }
  function Description() {
    var { plugin, result } = useCardContext();
    var highlightedNode = result[1].highlight((m2, i) => /* @__PURE__ */ jsx(Text, {
      style: {
        backgroundColor: getHighlightColor()
      },
      children: m2
    }, i));
    return /* @__PURE__ */ jsx(Text, {
      variant: "text-md/medium",
      children: highlightedNode.length ? highlightedNode : plugin.description
    });
  }
  function PluginCard({ result, item: plugin }) {
    plugin.usePluginState();
    var [, forceUpdate] = React.useReducer(() => ({}), 0);
    var cardContextValue = (0, import_react4.useMemo)(() => ({
      plugin,
      result
    }), [
      plugin,
      result
    ]);
    return /* @__PURE__ */ jsx(CardContext.Provider, {
      value: cardContextValue,
      children: /* @__PURE__ */ jsx(Card, {
        children: /* @__PURE__ */ jsxs(Stack, {
          spacing: 16,
          children: [
            /* @__PURE__ */ jsxs(import_react_native18.View, {
              style: {
                flexDirection: "row",
                justifyContent: "space-between"
              },
              children: [
                /* @__PURE__ */ jsxs(import_react_native18.View, {
                  style: {
                    flexShrink: 1
                  },
                  children: [
                    /* @__PURE__ */ jsx(Title, {}),
                    /* @__PURE__ */ jsx(Authors, {})
                  ]
                }),
                /* @__PURE__ */ jsx(import_react_native18.View, {
                  children: /* @__PURE__ */ jsxs(Stack, {
                    spacing: 12,
                    direction: "horizontal",
                    children: [
                      /* @__PURE__ */ jsx(Actions, {}),
                      /* @__PURE__ */ jsx(TableSwitch, {
                        value: plugin.isEnabled(),
                        onValueChange: (v2) => {
                          plugin.toggle(v2);
                          forceUpdate();
                        }
                      })
                    ]
                  })
                })
              ]
            }),
            /* @__PURE__ */ jsx(Description, {})
          ]
        })
      })
    });
  }
  var import_chroma_js4, import_react4, import_react_native18, CardContext, useCardContext, Actions;
  var init_PluginCard = __esm({
    "src/core/ui/settings/pages/Plugins/components/PluginCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_usePluginCardStyles();
      init_assets();
      init_common();
      init_components();
      init_sheets();
      import_chroma_js4 = __toESM(require_chroma_js());
      import_react4 = __toESM(require_react());
      import_react_native18 = __toESM(require_react_native());
      CardContext = /* @__PURE__ */ (0, import_react4.createContext)(null);
      useCardContext = () => (0, import_react4.useContext)(CardContext);
      Actions = () => {
        var { plugin } = useCardContext();
        var navigation2 = NavigationNative.useNavigation();
        return /* @__PURE__ */ jsxs(import_react_native18.View, {
          style: {
            flexDirection: "row",
            gap: 6
          },
          children: [
            /* @__PURE__ */ jsx(IconButton, {
              size: "sm",
              variant: "secondary",
              icon: findAssetId("WrenchIcon"),
              disabled: !plugin.getPluginSettingsComponent(),
              onPress: () => navigation2.push("SCHAT_CUSTOM_PAGE", {
                title: plugin.name,
                render: plugin.getPluginSettingsComponent()
              })
            }),
            /* @__PURE__ */ jsx(IconButton, {
              size: "sm",
              variant: "secondary",
              icon: findAssetId("CircleInformationIcon-primary"),
              onPress: () => void showSheet("PluginInfoActionSheet", plugin.resolveSheetComponent(), {
                plugin,
                navigation: navigation2
              })
            })
          ]
        });
      };
    }
  });

  // src/core/vendetta/plugins.ts
  var plugins, pluginInstance, VdPluginManager;
  var init_plugins = __esm({
    "src/core/vendetta/plugins.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_storage();
      init_settings();
      init_utils();
      init_constants();
      init_logger();
      plugins = wrapSync(createStorage(createMMKVBackend("VENDETTA_PLUGINS")));
      pluginInstance = {};
      VdPluginManager = {
        plugins,
        pluginFetch(url2) {
          return _async_to_generator(function* () {
            if (url2.startsWith(VD_PROXY_PREFIX)) {
              url2 = url2.replace("https://bunny-mod.github.io/plugins-proxy", SCHAT_PROXY_PREFIX).replace(VD_PROXY_PREFIX, SCHAT_PROXY_PREFIX);
            }
            return yield safeFetch(url2, {
              cache: "no-store"
            });
          })();
        },
        fetchPlugin(id) {
          return _async_to_generator(function* () {
            if (!id.endsWith("/"))
              id += "/";
            var existingPlugin = plugins[id];
            var pluginManifest;
            try {
              pluginManifest = yield (yield this.pluginFetch(id + "manifest.json")).json();
            } catch (e) {
              throw new Error(`Failed to fetch manifest for ${id}`);
            }
            var pluginJs;
            if (existingPlugin?.manifest.hash !== pluginManifest.hash) {
              try {
                pluginJs = yield (yield this.pluginFetch(id + (pluginManifest.main || "index.js"))).text();
              } catch (e) {
              }
            }
            if (!pluginJs && !existingPlugin)
              throw new Error(`Failed to fetch JS for ${id}`);
            plugins[id] = {
              id,
              manifest: pluginManifest,
              enabled: existingPlugin?.enabled ?? false,
              update: existingPlugin?.update ?? true,
              js: pluginJs ?? existingPlugin.js
            };
          }).apply(this);
        },
        installPlugin(id, enabled = true) {
          return _async_to_generator(function* () {
            if (!id.endsWith("/"))
              id += "/";
            if (typeof id !== "string" || id in plugins)
              throw new Error("Plugin already installed");
            yield this.fetchPlugin(id);
            if (enabled)
              yield this.startPlugin(id);
          }).apply(this);
        },
        /**
         * @internal
         */
        evalPlugin(plugin) {
          return _async_to_generator(function* () {
            var vendettaForPlugins = {
              ...window.vendetta,
              plugin: {
                id: plugin.id,
                manifest: plugin.manifest,
                // Wrapping this with wrapSync is NOT an option.
                storage: yield createStorage(createMMKVBackend(plugin.id))
              },
              logger: new LoggerClass(`SChat \xBB ${plugin.manifest.name}`)
            };
            var pluginString = `vendetta=>{return ${plugin.js}}
//# sourceURL=${plugin.id}`;
            var raw = (0, eval)(pluginString)(vendettaForPlugins);
            var ret = typeof raw === "function" ? raw() : raw;
            return ret?.default ?? ret ?? {};
          })();
        },
        startPlugin(id) {
          return _async_to_generator(function* () {
            if (!id.endsWith("/"))
              id += "/";
            var plugin = plugins[id];
            if (!plugin)
              throw new Error("Attempted to start non-existent plugin");
            try {
              if (!settings.safeMode?.enabled) {
                var pluginRet = yield this.evalPlugin(plugin);
                pluginInstance[id] = pluginRet;
                pluginRet.onLoad?.();
              }
              plugin.enabled = true;
            } catch (e) {
              logger.error(`Plugin ${plugin.id} errored whilst loading, and will be unloaded`, e);
              try {
                pluginInstance[plugin.id]?.onUnload?.();
              } catch (e2) {
                logger.error(`Plugin ${plugin.id} errored whilst unloading`, e2);
              }
              delete pluginInstance[id];
              plugin.enabled = false;
            }
          }).apply(this);
        },
        stopPlugin(id, disable = true) {
          if (!id.endsWith("/"))
            id += "/";
          var plugin = plugins[id];
          var pluginRet = pluginInstance[id];
          if (!plugin)
            throw new Error("Attempted to stop non-existent plugin");
          if (!settings.safeMode?.enabled) {
            try {
              pluginRet?.onUnload?.();
            } catch (e) {
              logger.error(`Plugin ${plugin.id} errored whilst unloading`, e);
            }
            delete pluginInstance[id];
          }
          if (disable)
            plugin.enabled = false;
        },
        removePlugin(id) {
          return _async_to_generator(function* () {
            if (!id.endsWith("/"))
              id += "/";
            var plugin = plugins[id];
            if (plugin.enabled)
              this.stopPlugin(id);
            delete plugins[id];
            yield purgeStorage(id);
          }).apply(this);
        },
        /**
         * @internal
         */
        initPlugins() {
          return _async_to_generator(function* () {
            yield awaitStorage(settings, plugins);
            var allIds = Object.keys(plugins);
            if (!settings.safeMode?.enabled) {
              var _this = this;
              yield allSettled(allIds.filter((pl) => plugins[pl].enabled).map(/* @__PURE__ */ function() {
                var _ref = _async_to_generator(function* (pl) {
                  return plugins[pl].update && (yield _this.fetchPlugin(pl).catch((e) => logger.error(e.message))), yield _this.startPlugin(pl);
                });
                return function(pl) {
                  return _ref.apply(this, arguments);
                };
              }()));
              allIds.filter((pl) => !plugins[pl].enabled && plugins[pl].update).forEach((pl) => this.fetchPlugin(pl));
            }
            return () => this.stopAllPlugins();
          }).apply(this);
        },
        stopAllPlugins() {
          return Object.keys(pluginInstance).forEach((p) => this.stopPlugin(p, false));
        },
        getSettings: (id) => pluginInstance[id]?.settings
      };
    }
  });

  // src/core/plugins/quickinstall/forumPost.tsx
  function useExtractThreadContent(thread, _firstMessage = null, actionSheet3 = false) {
    if (thread.guild_id !== VD_DISCORD_SERVER_ID)
      return;
    var postType;
    if (thread.parent_id === VD_PLUGINS_CHANNEL_ID) {
      postType = "Plugin";
    } else if (thread.parent_id === VD_THEMES_CHANNEL_ID && isThemeSupported()) {
      postType = "Theme";
    } else
      return;
    var { firstMessage } = actionSheet3 ? useFirstForumPostMessage(thread) : {
      firstMessage: _firstMessage
    };
    var urls = firstMessage?.content?.match(HTTP_REGEX_MULTI)?.filter(postMap[postType].urlsFilter);
    if (!urls || !urls[0])
      return;
    if (postType === "Plugin" && !urls[0].endsWith("/"))
      urls[0] += "/";
    return [
      postType,
      urls[0]
    ];
  }
  function useInstaller(thread, firstMessage = null, actionSheet3 = false) {
    var [postType, url2] = useExtractThreadContent(thread, firstMessage, actionSheet3) ?? [];
    useProxy(VdPluginManager.plugins);
    useProxy(themes);
    var [isInstalling, setIsInstalling] = React.useState(false);
    if (!postType || !url2)
      return [
        true
      ];
    var isInstalled = Boolean(postMap[postType].storage[url2]);
    var installOrRemove = /* @__PURE__ */ function() {
      var _ref = _async_to_generator(function* () {
        setIsInstalling(true);
        try {
          yield postMap[postType].installOrRemove(url2);
        } catch (e) {
          showToast(e.message, findAssetId("Small"));
        } finally {
          setIsInstalling(false);
        }
      });
      return function installOrRemove2() {
        return _ref.apply(this, arguments);
      };
    }();
    return [
      false,
      postType,
      isInstalled,
      isInstalling,
      installOrRemove
    ];
  }
  var useFirstForumPostMessage, forumReactions, postMap, installButtonPatch, forumPost_default;
  var init_forumPost = __esm({
    "src/core/plugins/quickinstall/forumPost.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_plugins();
      init_storage();
      init_themes();
      init_assets();
      init_loader();
      init_patcher();
      init_constants();
      init_lazy();
      init_components();
      init_wrappers();
      init_components2();
      init_toasts();
      ({ useFirstForumPostMessage } = lazyDestructure(() => findByProps("useFirstForumPostMessage")));
      forumReactions = findByPropsLazy("MostCommonForumPostReaction");
      postMap = {
        Plugin: {
          storage: VdPluginManager.plugins,
          urlsFilter: (url2) => url2.startsWith(VD_PROXY_PREFIX),
          installOrRemove: (url2) => {
            var isInstalled = postMap.Plugin.storage[url2];
            return isInstalled ? VdPluginManager.removePlugin(url2) : VdPluginManager.installPlugin(url2);
          }
        },
        Theme: {
          storage: themes,
          urlsFilter: (url2) => url2.endsWith(".json"),
          installOrRemove: (url2) => {
            var isInstalled = postMap.Theme.storage[url2];
            return isInstalled ? removeTheme(url2) : installTheme(url2);
          }
        }
      };
      installButtonPatch = () => after("MostCommonForumPostReaction", forumReactions, ([{ thread, firstMessage }], res) => {
        var [shouldReturn, _2, installed, loading, installOrRemove] = useInstaller(thread, firstMessage, true);
        if (shouldReturn)
          return;
        return /* @__PURE__ */ jsxs(Fragment, {
          children: [
            res,
            /* @__PURE__ */ jsx(ErrorBoundary, {
              children: /* @__PURE__ */ jsx(Button, {
                size: "sm",
                loading,
                disabled: loading,
                // variant={installed ? "destructive" : "primary"} crashes older version because "destructive" was renamed from "danger" and there's no sane way for compat check horror
                variant: installed ? "secondary" : "primary",
                text: installed ? Strings.UNINSTALL : Strings.INSTALL,
                onPress: installOrRemove,
                icon: findAssetId(installed ? "ic_message_delete" : "DownloadIcon"),
                style: {
                  marginLeft: 8
                }
              })
            })
          ]
        });
      });
      forumPost_default = () => {
        var patches2 = [
          // actionSheetPatch(),
          installButtonPatch()
        ];
        return () => patches2.map((p) => p());
      };
    }
  });

  // src/lib/ui/components/InputAlert.tsx
  function InputAlert2({ title, confirmText, confirmColor, onConfirm, cancelText, placeholder, initialValue = "", secureTextEntry }) {
    var [value, setValue] = React.useState(initialValue);
    var [error, setError] = React.useState("");
    function onConfirmWrapper() {
      var asyncOnConfirm = Promise.resolve(onConfirm(value));
      asyncOnConfirm.then(() => {
        Alerts.close();
      }).catch((e) => {
        setError(e.message);
      });
    }
    return /* @__PURE__ */ jsx(LegacyAlert, {
      title,
      confirmText,
      confirmColor,
      isConfirmButtonDisabled: error.length !== 0,
      onConfirm: onConfirmWrapper,
      cancelText,
      onCancel: () => Alerts.close(),
      children: /* @__PURE__ */ jsx(LegacyFormInput, {
        placeholder,
        value,
        onChange: (v2) => {
          setValue(typeof v2 === "string" ? v2 : v2.text);
          if (error)
            setError("");
        },
        returnKeyType: "done",
        onSubmitEditing: onConfirmWrapper,
        error: error || void 0,
        secureTextEntry,
        autoFocus: true,
        showBorder: true,
        style: {
          alignSelf: "stretch"
        }
      })
    });
  }
  var Alerts;
  var init_InputAlert = __esm({
    "src/lib/ui/components/InputAlert.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_components();
      init_wrappers();
      Alerts = findByPropsLazy("openLazy", "close");
    }
  });

  // src/core/vendetta/alerts.ts
  function showConfirmationAlert(options) {
    var internalOptions = options;
    internalOptions.body = options.content;
    delete internalOptions.content;
    internalOptions.isDismissable ??= true;
    return Alerts2.show(internalOptions);
  }
  var Alerts2, showCustomAlert, showInputAlert;
  var init_alerts2 = __esm({
    "src/core/vendetta/alerts.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_wrappers();
      init_InputAlert();
      Alerts2 = findByPropsLazy("openLazy", "close");
      showCustomAlert = (component, props) => Alerts2.openLazy({
        importer: /* @__PURE__ */ _async_to_generator(function* () {
          return () => React.createElement(component, props);
        })
      });
      showInputAlert = (options) => showCustomAlert(InputAlert2, options);
    }
  });

  // src/core/plugins/quickinstall/url.tsx
  function typeFromUrl(url2) {
    if (url2.startsWith(VD_PROXY_PREFIX)) {
      return "plugin";
    } else if (url2.endsWith(".json") && isThemeSupported()) {
      return "theme";
    }
  }
  function installWithToast(type, url2) {
    (type === "plugin" ? VdPluginManager.installPlugin.bind(VdPluginManager) : installTheme)(url2).then(() => {
      showToast(Strings.SUCCESSFULLY_INSTALLED, findAssetId("Check"));
    }).catch((e) => {
      showToast(e.message, findAssetId("Small"));
    });
  }
  var showSimpleActionSheet2, handleClick, openURL, getChannelId, getChannel, url_default;
  var init_url = __esm({
    "src/core/plugins/quickinstall/url.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_i18n();
      init_alerts2();
      init_plugins();
      init_themes();
      init_assets();
      init_loader();
      init_patcher();
      init_constants();
      init_lazy();
      init_common();
      init_filters();
      init_finders();
      init_wrappers();
      init_toasts();
      showSimpleActionSheet2 = findExports(byMutableProp("showSimpleActionSheet"));
      handleClick = findByPropsLazy("handleClick");
      ({ openURL } = lazyDestructure(() => url));
      ({ getChannelId } = lazyDestructure(() => channels));
      ({ getChannel } = lazyDestructure(() => findByProps("getChannel")));
      url_default = () => {
        var patches2 = new Array();
        patches2.push(after("showSimpleActionSheet", showSimpleActionSheet2, (args) => {
          if (args[0].key !== "LongPressUrl")
            return;
          var { header: { title: url2 }, options } = args[0];
          var urlType = typeFromUrl(url2);
          if (!urlType)
            return;
          options.push({
            label: Strings.INSTALL_ADDON,
            onPress: () => installWithToast(urlType, url2)
          });
        }));
        patches2.push(instead("handleClick", handleClick, /* @__PURE__ */ function() {
          var _ref = _async_to_generator(function* (args, orig) {
            var { href: url2 } = args[0];
            var urlType = typeFromUrl(url2);
            if (!urlType)
              return orig.apply(this, args);
            if (urlType === "theme" && getChannel(getChannelId())?.parent_id !== VD_THEMES_CHANNEL_ID)
              return orig.apply(this, args);
            showConfirmationAlert({
              title: Strings.HOLD_UP,
              content: formatString("CONFIRMATION_LINK_IS_A_TYPE", {
                urlType
              }),
              onConfirm: () => installWithToast(urlType, url2),
              confirmText: Strings.INSTALL,
              cancelText: Strings.CANCEL,
              secondaryConfirmText: Strings.OPEN_IN_BROWSER,
              onConfirmSecondary: () => openURL(url2)
            });
          });
          return function(args, orig) {
            return _ref.apply(this, arguments);
          };
        }()));
        return () => patches2.forEach((p) => p());
      };
    }
  });

  // src/core/plugins/quickinstall/index.ts
  var quickinstall_exports = {};
  __export(quickinstall_exports, {
    default: () => quickinstall_default
  });
  var patches, quickinstall_default;
  var init_quickinstall = __esm({
    "src/core/plugins/quickinstall/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_plugins2();
      init_forumPost();
      init_url();
      patches = [];
      quickinstall_default = defineCorePlugin({
        manifest: {
          id: "schat.quickinstall",
          name: "QuickInstall",
          version: "1.0.0",
          description: "Quickly install Vendetta plugins and themes",
          authors: [
            {
              name: "Vendetta Team"
            }
          ]
        },
        start() {
          patches = [
            forumPost_default(),
            url_default()
          ];
        },
        stop() {
          patches.forEach((p) => p());
        }
      });
    }
  });

  // src/lib/api/react/jsx.ts
  var jsx_exports = {};
  __export(jsx_exports, {
    deleteJsxCreate: () => deleteJsxCreate,
    onJsxCreate: () => onJsxCreate,
    patchJsx: () => patchJsx
  });
  function onJsxCreate(Component, callback) {
    if (!callbacks.has(Component))
      callbacks.set(Component, []);
    callbacks.get(Component).push(callback);
  }
  function deleteJsxCreate(Component, callback) {
    if (!callbacks.has(Component))
      return;
    var cbs = callbacks.get(Component);
    cbs.splice(cbs.indexOf(callback), 1);
    if (cbs.length === 0)
      callbacks.delete(Component);
  }
  function patchJsx() {
    var callback = ([Component], ret) => {
      if (typeof Component === "function" && callbacks.has(Component.name)) {
        var cbs = callbacks.get(Component.name);
        for (var cb of cbs) {
          var _ret = cb(Component, ret);
          if (_ret !== void 0)
            ret = _ret;
        }
        return ret;
      }
    };
    var patches2 = [
      after("jsx", jsxRuntime2, callback),
      after("jsxs", jsxRuntime2, callback)
    ];
    return () => patches2.forEach((unpatch) => unpatch());
  }
  var callbacks, jsxRuntime2;
  var init_jsx = __esm({
    "src/lib/api/react/jsx.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_patcher();
      init_metro();
      callbacks = /* @__PURE__ */ new Map();
      jsxRuntime2 = findByPropsLazy("jsx", "jsxs");
    }
  });

  // src/core/plugins/badges/index.tsx
  var badges_exports = {};
  __export(badges_exports, {
    default: () => badges_default
  });
  var import_react5, useBadgesModule, badges_default;
  var init_badges = __esm({
    "src/core/plugins/badges/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_patcher();
      init_jsx();
      init_metro();
      import_react5 = __toESM(require_react());
      init_plugins2();
      useBadgesModule = findByName("useBadges", false);
      badges_default = defineCorePlugin({
        manifest: {
          id: "schat.badges",
          name: "Badges",
          version: "1.0.0",
          description: "Adds badges to user's profile",
          authors: [
            {
              name: "pylixonly"
            }
          ]
        },
        start() {
          var propHolder = {};
          var badgeCache = {};
          onJsxCreate("RenderedBadge", (_2, ret) => {
            if (ret.props.id.match(/schat-\d+-\d+/)) {
              Object.assign(ret.props, propHolder[ret.props.id]);
            }
          });
          after("default", useBadgesModule, ([user], r) => {
            var [badges, setBadges] = (0, import_react5.useState)(user ? badgeCache[user.userId] ??= [] : []);
            (0, import_react5.useEffect)(() => {
              if (user) {
                fetch(`https://raw.githubusercontent.com/Soncresity-Industries/SChat-badges/refs/heads/main/${user.userId}.json`).then((r2) => r2.json()).then((badges2) => setBadges(badgeCache[user.userId] = badges2));
              }
            }, [
              user
            ]);
            if (user) {
              badges.forEach((badges2, i) => {
                propHolder[`schat-${user.userId}-${i}`] = {
                  source: {
                    uri: badges2.url
                  },
                  id: `schat-${i}`,
                  label: badges2.label
                };
                r.push({
                  id: `schat-${user.userId}-${i}`,
                  description: badges2.label,
                  icon: "_"
                });
              });
            }
          });
        }
      });
    }
  });

  // src/core/plugins/index.ts
  function defineCorePlugin(instance) {
    instance[Symbol.for("schat.core.plugin")] = true;
    return instance;
  }
  var getCorePlugins;
  var init_plugins2 = __esm({
    "src/core/plugins/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      getCorePlugins = () => ({
        "schat.quickinstall": (init_quickinstall(), __toCommonJS(quickinstall_exports)),
        "schat.badges": (init_badges(), __toCommonJS(badges_exports))
      });
    }
  });

  // src/lib/api/commands/types.ts
  var ApplicationCommandInputType, ApplicationCommandOptionType, ApplicationCommandType;
  var init_types = __esm({
    "src/lib/api/commands/types.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      (function(ApplicationCommandInputType2) {
        ApplicationCommandInputType2[ApplicationCommandInputType2["BUILT_IN"] = 0] = "BUILT_IN";
        ApplicationCommandInputType2[ApplicationCommandInputType2["BUILT_IN_TEXT"] = 1] = "BUILT_IN_TEXT";
        ApplicationCommandInputType2[ApplicationCommandInputType2["BUILT_IN_INTEGRATION"] = 2] = "BUILT_IN_INTEGRATION";
        ApplicationCommandInputType2[ApplicationCommandInputType2["BOT"] = 3] = "BOT";
        ApplicationCommandInputType2[ApplicationCommandInputType2["PLACEHOLDER"] = 4] = "PLACEHOLDER";
      })(ApplicationCommandInputType || (ApplicationCommandInputType = {}));
      (function(ApplicationCommandOptionType2) {
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["SUB_COMMAND"] = 1] = "SUB_COMMAND";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["SUB_COMMAND_GROUP"] = 2] = "SUB_COMMAND_GROUP";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["STRING"] = 3] = "STRING";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["INTEGER"] = 4] = "INTEGER";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["BOOLEAN"] = 5] = "BOOLEAN";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["USER"] = 6] = "USER";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["CHANNEL"] = 7] = "CHANNEL";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["ROLE"] = 8] = "ROLE";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["MENTIONABLE"] = 9] = "MENTIONABLE";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["NUMBER"] = 10] = "NUMBER";
        ApplicationCommandOptionType2[ApplicationCommandOptionType2["ATTACHMENT"] = 11] = "ATTACHMENT";
      })(ApplicationCommandOptionType || (ApplicationCommandOptionType = {}));
      (function(ApplicationCommandType2) {
        ApplicationCommandType2[ApplicationCommandType2["CHAT"] = 1] = "CHAT";
        ApplicationCommandType2[ApplicationCommandType2["USER"] = 2] = "USER";
        ApplicationCommandType2[ApplicationCommandType2["MESSAGE"] = 3] = "MESSAGE";
      })(ApplicationCommandType || (ApplicationCommandType = {}));
    }
  });

  // src/core/commands/eval.ts
  var eval_exports = {};
  __export(eval_exports, {
    default: () => eval_default
  });
  function wrapInJSCodeblock(resString) {
    return "```js\n" + resString.replaceAll("`", "`" + ZERO_WIDTH_SPACE_CHARACTER) + "\n```";
  }
  var util, AsyncFunction, ZERO_WIDTH_SPACE_CHARACTER, eval_default;
  var init_eval = __esm({
    "src/core/commands/eval.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_i18n();
      init_types();
      init_settings();
      init_common();
      init_wrappers();
      util = findByPropsLazy("inspect");
      AsyncFunction = _async_to_generator(function* () {
        return void 0;
      }).constructor;
      ZERO_WIDTH_SPACE_CHARACTER = "\u200B";
      eval_default = () => ({
        name: "eval",
        description: Strings.COMMAND_EVAL_DESC,
        shouldHide: () => settings.enableEvalCommand === true,
        options: [
          {
            name: "code",
            type: ApplicationCommandOptionType.STRING,
            description: Strings.COMMAND_EVAL_OPT_CODE,
            required: true
          },
          {
            name: "async",
            type: ApplicationCommandOptionType.BOOLEAN,
            description: Strings.COMMAND_EVAL_OPT_ASYNC
          }
        ],
        execute([code, async], ctx) {
          return _async_to_generator(function* () {
            try {
              var res = util.inspect(async?.value ? yield AsyncFunction(code.value)() : eval?.(code.value));
              var trimmedRes = res.length > 2e3 ? res.slice(0, 2e3) + "..." : res;
              messageUtil.sendBotMessage(ctx.channel.id, wrapInJSCodeblock(trimmedRes));
            } catch (err) {
              messageUtil.sendBotMessage(ctx.channel.id, wrapInJSCodeblock(err?.stack ?? err));
            }
          })();
        }
      });
    }
  });

  // src/core/commands/debug.ts
  var debug_exports2 = {};
  __export(debug_exports2, {
    default: () => debug_default
  });
  var debug_default;
  var init_debug2 = __esm({
    "src/core/commands/debug.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_i18n();
      init_types();
      init_debug();
      init_common();
      debug_default = () => ({
        name: "debug",
        description: Strings.COMMAND_DEBUG_DESC,
        options: [
          {
            name: "ephemeral",
            type: ApplicationCommandOptionType.BOOLEAN,
            description: Strings.COMMAND_DEBUG_OPT_EPHEMERALLY
          }
        ],
        execute([ephemeral], ctx) {
          var info = getDebugInfo();
          var content = [
            "**SChat Debug Info**",
            `> SChat: ${info.schat.version} (${info.schat.loader.name} ${info.schat.loader.version})`,
            `> Discord: ${info.discord.version} (${info.discord.build})`,
            `> React: ${info.react.version} (RN ${info.react.nativeVersion})`,
            `> Hermes: ${info.hermes.version} (bcv${info.hermes.bytecodeVersion})`,
            `> System: ${info.os.name} ${info.os.version} ${info.os.sdk ? `(SDK ${info.os.sdk})` : ""}`.trimEnd(),
            `> Device: ${info.device.model} (${info.device.codename})`
          ].join("\n");
          if (ephemeral?.value) {
            messageUtil.sendBotMessage(ctx.channel.id, content);
          } else {
            messageUtil.sendMessage(ctx.channel.id, {
              content
            });
          }
        }
      });
    }
  });

  // src/core/commands/plugins.ts
  var plugins_exports = {};
  __export(plugins_exports, {
    default: () => plugins_default
  });
  var plugins_default;
  var init_plugins3 = __esm({
    "src/core/commands/plugins.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_i18n();
      init_plugins();
      init_types();
      init_common();
      plugins_default = () => ({
        name: "plugins",
        description: Strings.COMMAND_PLUGINS_DESC,
        options: [
          {
            name: "ephemeral",
            displayName: "ephemeral",
            type: ApplicationCommandOptionType.BOOLEAN,
            description: Strings.COMMAND_DEBUG_OPT_EPHEMERALLY
          }
        ],
        execute([ephemeral], ctx) {
          var plugins2 = Object.values(VdPluginManager.plugins).filter(Boolean);
          plugins2.sort((a, b3) => a.manifest.name.localeCompare(b3.manifest.name));
          var enabled = plugins2.filter((p) => p.enabled).map((p) => p.manifest.name);
          var disabled = plugins2.filter((p) => !p.enabled).map((p) => p.manifest.name);
          var content = [
            `**Installed Plugins (${plugins2.length}):**`,
            ...enabled.length > 0 ? [
              `Enabled (${enabled.length}):`,
              "> " + enabled.join(", ")
            ] : [],
            ...disabled.length > 0 ? [
              `Disabled (${disabled.length}):`,
              "> " + disabled.join(", ")
            ] : []
          ].join("\n");
          if (ephemeral?.value) {
            messageUtil.sendBotMessage(ctx.channel.id, content);
          } else {
            messageUtil.sendMessage(ctx.channel.id, {
              content
            });
          }
        }
      });
    }
  });

  // src/lib/api/commands/index.ts
  var commands_exports = {};
  __export(commands_exports, {
    patchCommands: () => patchCommands,
    registerCommand: () => registerCommand
  });
  function patchCommands() {
    var unpatch = after("getBuiltInCommands", commands, ([type], res) => {
      return [
        ...res,
        ...commands2.filter((c2) => (type instanceof Array ? type.includes(c2.type) : type === c2.type) && c2.__schat?.shouldHide?.() !== false)
      ];
    });
    [
      (init_eval(), __toCommonJS(eval_exports)),
      (init_debug2(), __toCommonJS(debug_exports2)),
      (init_plugins3(), __toCommonJS(plugins_exports))
    ].forEach((r) => registerCommand(r.default()));
    return () => {
      commands2 = [];
      unpatch();
    };
  }
  function registerCommand(command) {
    var builtInCommands;
    try {
      builtInCommands = commands.getBuiltInCommands(ApplicationCommandType.CHAT, true, false);
    } catch (e) {
      builtInCommands = commands.getBuiltInCommands(Object.values(ApplicationCommandType), true, false);
    }
    builtInCommands.sort((a, b3) => parseInt(b3.id) - parseInt(a.id));
    var lastCommand = builtInCommands[builtInCommands.length - 1];
    command.id = (parseInt(lastCommand.id, 10) - 1).toString();
    command.__schat = {
      shouldHide: command.shouldHide
    };
    command.applicationId ??= "-1";
    command.type ??= ApplicationCommandType.CHAT;
    command.inputType = ApplicationCommandInputType.BUILT_IN;
    command.displayName ??= command.name;
    command.untranslatedName ??= command.name;
    command.displayDescription ??= command.description;
    command.untranslatedDescription ??= command.description;
    if (command.options)
      for (var opt of command.options) {
        opt.displayName ??= opt.name;
        opt.displayDescription ??= opt.description;
      }
    instead("execute", command, (args, orig) => {
      Promise.resolve(orig.apply(command, args)).then((ret) => {
        if (ret && typeof ret === "object") {
          messageUtil.sendMessage(args[1].channel.id, ret);
        }
      }).catch((err) => {
        logger.error("Failed to execute command", err);
      });
    });
    commands2.push(command);
    return () => commands2 = commands2.filter(({ id }) => id !== command.id);
  }
  var commands2;
  var init_commands = __esm({
    "src/lib/api/commands/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_types();
      init_patcher();
      init_logger();
      init_common();
      commands2 = [];
    }
  });

  // src/lib/api/flux/index.ts
  var flux_exports = {};
  __export(flux_exports, {
    dispatcher: () => dispatcher,
    injectFluxInterceptor: () => injectFluxInterceptor,
    intercept: () => intercept
  });
  function injectFluxInterceptor() {
    var cb = (payload) => {
      for (var intercept2 of intercepts) {
        var res = intercept2(payload);
        if (res == null) {
          continue;
        } else if (!res) {
          payload[blockedSym] = true;
        } else if (typeof res === "object") {
          Object.assign(payload, res);
          payload[modifiedSym] = true;
        }
      }
      return blockedSym in payload;
    };
    (dispatcher._interceptors ??= []).unshift(cb);
    return () => dispatcher._interceptors &&= dispatcher._interceptors.filter((v2) => v2 !== cb);
  }
  function intercept(cb) {
    intercepts.push(cb);
    return () => {
      intercepts = intercepts.filter((i) => i !== cb);
    };
  }
  var blockedSym, modifiedSym, dispatcher, intercepts;
  var init_flux = __esm({
    "src/lib/api/flux/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_common();
      blockedSym = Symbol.for("schat.flux.blocked");
      modifiedSym = Symbol.for("schat.flux.modified");
      dispatcher = FluxDispatcher;
      intercepts = [];
    }
  });

  // src/lib/api/native/index.ts
  var native_exports = {};
  __export(native_exports, {
    fs: () => fs_exports
  });
  var init_native = __esm({
    "src/lib/api/native/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_fs();
    }
  });

  // src/lib/api/react/index.ts
  var react_exports = {};
  __export(react_exports, {
    jsx: () => jsx_exports
  });
  var init_react = __esm({
    "src/lib/api/react/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsx();
    }
  });

  // src/lib/api/index.ts
  var api_exports = {};
  __export(api_exports, {
    assets: () => assets_exports,
    commands: () => commands_exports,
    debug: () => debug_exports,
    flux: () => flux_exports,
    native: () => native_exports,
    patcher: () => patcher_exports,
    react: () => react_exports,
    settings: () => settings_exports,
    storage: () => storage_exports
  });
  var init_api = __esm({
    "src/lib/api/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_assets();
      init_commands();
      init_debug();
      init_flux();
      init_native();
      init_patcher();
      init_react();
      init_settings();
      init_storage2();
    }
  });

  // src/lib/addons/plugins/api.ts
  function shimDisposableFn(unpatches, f) {
    var dummy = (...props) => {
      var up = f(...props);
      unpatches.push(up);
      return up;
    };
    for (var key in f)
      if (typeof f[key] === "function") {
        dummy[key] = shimDisposableFn(unpatches, f[key]);
      }
    return dummy;
  }
  function createSChatPluginApi(id) {
    var disposers = new Array();
    var object = {
      ...window.schat,
      api: {
        ...window.schat.api,
        patcher: {
          before: shimDisposableFn(disposers, patcher_exports.before),
          after: shimDisposableFn(disposers, patcher_exports.after),
          instead: shimDisposableFn(disposers, patcher_exports.instead)
        },
        commands: {
          ...window.schat.api.commands,
          registerCommand: shimDisposableFn(disposers, registerCommand)
        },
        flux: {
          ...window.schat.api.flux,
          intercept: shimDisposableFn(disposers, window.schat.api.flux.intercept)
        }
      },
      // Added something in here? Make sure to also update SChatPluginProperty in ./types
      plugin: {
        createStorage: () => createStorage2(`plugins/storage/${id}.json`),
        manifest: registeredPlugins.get(id),
        logger
      }
    };
    return {
      object,
      disposers
    };
  }
  var init_api2 = __esm({
    "src/lib/addons/plugins/api.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_api();
      init_commands();
      init_storage2();
      init_logger();
      init_plugins4();
    }
  });

  // src/lib/addons/plugins/index.ts
  var plugins_exports2 = {};
  __export(plugins_exports2, {
    apiObjects: () => apiObjects,
    corePluginInstances: () => corePluginInstances,
    deleteRepository: () => deleteRepository,
    disablePlugin: () => disablePlugin,
    enablePlugin: () => enablePlugin,
    getPluginSettingsComponent: () => getPluginSettingsComponent,
    initPlugins: () => initPlugins,
    installPlugin: () => installPlugin,
    isCorePlugin: () => isCorePlugin,
    isGreaterVersion: () => isGreaterVersion,
    isPluginEnabled: () => isPluginEnabled,
    isPluginInstalled: () => isPluginInstalled,
    pluginInstances: () => pluginInstances,
    pluginRepositories: () => pluginRepositories,
    pluginSettings: () => pluginSettings,
    refreshPlugin: () => refreshPlugin,
    registeredPlugins: () => registeredPlugins,
    startPlugin: () => startPlugin,
    stopPlugin: () => stopPlugin,
    uninstallPlugin: () => uninstallPlugin,
    updateAllRepository: () => updateAllRepository,
    updateAndWritePlugin: () => updateAndWritePlugin,
    updatePlugins: () => updatePlugins,
    updateRepository: () => updateRepository
  });
  function assert(condition, id, attempt) {
    if (!condition)
      throw new Error(`[${id}] Attempted to ${attempt}`);
  }
  function isGreaterVersion(v1, v2) {
    if (semver.gt(v1, v2))
      return true;
    var coerced = semver.coerce(v1);
    if (coerced == null)
      return false;
    return semver.prerelease(v1)?.includes("dev") && semver.eq(coerced, v2);
  }
  function isExternalPlugin(manifest) {
    return "parentRepository" in manifest;
  }
  function isCorePlugin(id) {
    return corePluginInstances.has(id);
  }
  function getPluginSettingsComponent(id) {
    var instance = pluginInstances.get(id);
    if (!instance)
      return null;
    if (instance.SettingsComponent)
      return instance.SettingsComponent;
    return null;
  }
  function isPluginInstalled(id) {
    return pluginSettings[id] != null;
  }
  function isPluginEnabled(id) {
    return Boolean(pluginSettings[id]?.enabled);
  }
  function updateAndWritePlugin(repoUrl, id, fetchScript) {
    return _updateAndWritePlugin.apply(this, arguments);
  }
  function _updateAndWritePlugin() {
    _updateAndWritePlugin = _async_to_generator(function* (repoUrl, id, fetchScript) {
      var manifest = yield fetchJSON(repoUrl, `builds/${id}/manifest.json`);
      manifest.parentRepository = repoUrl;
      if (fetchScript) {
        manifest.jsPath = `plugins/scripts/${id}.js`;
        var js = yield fetchJS(repoUrl, `builds/${id}/index.js`);
        yield writeFile(manifest.jsPath, js);
      }
      yield updateStorage(`plugins/manifests/${id}.json`, manifest);
      if (registeredPlugins.has(id)) {
        var existingManifest = registeredPlugins.get(id);
        return Object.assign(existingManifest, manifest);
      }
      return manifest;
    });
    return _updateAndWritePlugin.apply(this, arguments);
  }
  function refreshPlugin(id, repoUrl) {
    return _refreshPlugin.apply(this, arguments);
  }
  function _refreshPlugin() {
    _refreshPlugin = _async_to_generator(function* (id, repoUrl) {
      var manifest = registeredPlugins.get(id);
      assert(manifest, id, "refresh a non-registered plugin");
      assert(pluginInstances.get(id), id, "refresh a non-started plugin");
      stopPlugin(id);
      if (isExternalPlugin(manifest)) {
        manifest = yield updateAndWritePlugin(repoUrl ?? manifest.parentRepository, id, true);
      }
      registeredPlugins.delete(id);
      registeredPlugins.set(id, manifest);
      yield startPlugin(id);
    });
    return _refreshPlugin.apply(this, arguments);
  }
  function updateRepository(repoUrl) {
    return _updateRepository.apply(this, arguments);
  }
  function _updateRepository() {
    _updateRepository = _async_to_generator(function* (repoUrl) {
      var repo = yield fetchJSON(repoUrl, "repo.json");
      var storedRepo = pluginRepositories[repoUrl];
      var updated = false;
      if (!storedRepo) {
        for (var id in repo) {
          if (corePluginInstances.has(id)) {
            throw new Error(`Plugins can't have the same ID as any of SChat core plugin '${id}'`);
          }
        }
        updated = true;
        pluginRepositories[repoUrl] = repo;
      } else {
        for (var plugin in storedRepo)
          if (!repo[plugin]) {
            delete storedRepo[plugin];
          }
      }
      var pluginIds = Object.keys(repo).filter((id2) => !id2.startsWith("$"));
      yield Promise.all(pluginIds.map(/* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* (pluginId) {
          if (!storedRepo || !storedRepo[pluginId] || repo[pluginId].alwaysFetch || isGreaterVersion(repo[pluginId].version, storedRepo[pluginId].version)) {
            updated = true;
            pluginRepositories[repoUrl][pluginId] = repo[pluginId];
            yield updateAndWritePlugin(repoUrl, pluginId, Boolean(storedRepo && pluginSettings[pluginId]));
          } else {
            var manifest2 = yield preloadStorageIfExists(`plugins/manifests/${pluginId}.json`);
            if (!manifest2) {
              yield updateAndWritePlugin(repoUrl, pluginId, Boolean(storedRepo && pluginSettings[pluginId]));
            }
          }
        });
        return function(pluginId) {
          return _ref.apply(this, arguments);
        };
      }()));
      for (var id1 of pluginIds) {
        var manifest = getPreloadedStorage(`plugins/manifests/${id1}.json`);
        if (manifest === void 0)
          continue;
        var existing = registeredPlugins.get(id1);
        if (existing && !isGreaterVersion(manifest.version, existing.version)) {
          continue;
        }
        registeredPlugins.set(id1, manifest);
      }
      return updated;
    });
    return _updateRepository.apply(this, arguments);
  }
  function deleteRepository(repoUrl) {
    return _deleteRepository.apply(this, arguments);
  }
  function _deleteRepository() {
    _deleteRepository = _async_to_generator(function* (repoUrl) {
      assert(repoUrl !== OFFICIAL_PLUGINS_REPO_URL, repoUrl, "delete the official repository");
      assert(pluginRepositories[repoUrl], repoUrl, "delete a non-registered repository");
      var promQueues = [];
      for (var [id, manifest] of registeredPlugins) {
        if (!isExternalPlugin(manifest) || manifest.parentRepository !== repoUrl)
          continue;
        if (isPluginInstalled(id)) {
          promQueues.push(uninstallPlugin(id));
        }
        promQueues.push(purgeStorage2(`plugins/manifests/${id}.json`));
        registeredPlugins.delete(id);
      }
      delete pluginRepositories[repoUrl];
      yield Promise.all(promQueues);
      updateAllRepository();
    });
    return _deleteRepository.apply(this, arguments);
  }
  function enablePlugin(id, start) {
    return _enablePlugin.apply(this, arguments);
  }
  function _enablePlugin() {
    _enablePlugin = _async_to_generator(function* (id, start) {
      assert(isPluginInstalled(id), id, "enable a non-installed plugin");
      if (start)
        yield startPlugin(id);
      pluginSettings[id].enabled = true;
    });
    return _enablePlugin.apply(this, arguments);
  }
  function disablePlugin(id) {
    assert(isPluginInstalled(id), id, "disable a non-installed plugin");
    pluginInstances.has(id) && stopPlugin(id);
    pluginSettings[id].enabled = false;
  }
  function installPlugin(id, start) {
    return _installPlugin.apply(this, arguments);
  }
  function _installPlugin() {
    _installPlugin = _async_to_generator(function* (id, start) {
      var manifest = registeredPlugins.get(id);
      assert(manifest, id, "install an non-registered plugin");
      assert(!isPluginInstalled(id), id, "install an already installed plugin");
      assert(isExternalPlugin(manifest), id, "install a core plugin");
      yield updateAndWritePlugin(manifest.parentRepository, id, true);
      pluginSettings[id] = {
        enabled: true
      };
      if (start)
        startPlugin(id);
    });
    return _installPlugin.apply(this, arguments);
  }
  function uninstallPlugin(id) {
    return _uninstallPlugin.apply(this, arguments);
  }
  function _uninstallPlugin() {
    _uninstallPlugin = _async_to_generator(function* (id) {
      var manifest = registeredPlugins.get(id);
      assert(manifest, id, "uninstall an unregistered plugin");
      assert(isPluginInstalled(id), id, "uninstall a non-installed plugin");
      assert(isExternalPlugin(manifest), id, "uninstall a core plugin");
      pluginInstances.has(id) && stopPlugin(id);
      delete pluginSettings[id];
      yield purgeStorage2(`plugins/storage/${id}.json`);
      yield removeFile(`plugins/scripts/${id}.js`);
    });
    return _uninstallPlugin.apply(this, arguments);
  }
  function startPlugin(id) {
    return _startPlugin.apply(this, arguments);
  }
  function _startPlugin() {
    _startPlugin = _async_to_generator(function* (id, { throwIfDisabled = false, disableWhenThrown = true } = {}) {
      var manifest = registeredPlugins.get(id);
      assert(manifest, id, "start a non-registered plugin");
      assert(isPluginInstalled(id), id, "start a non-installed plugin");
      assert(!throwIfDisabled || pluginSettings[id]?.enabled, id, "start a disabled plugin");
      assert(!pluginInstances.has(id), id, "start an already started plugin");
      yield preloadStorageIfExists(`plugins/storage/${id}.json`);
      var pluginInstance2;
      if (isExternalPlugin(manifest)) {
        try {
          var iife = yield readFile(manifest.jsPath);
          var instantiator = globalEvalWithSourceUrl(`(schat,definePlugin)=>{${iife};return plugin?.default ?? plugin;}`, `schat-plugin/${id}-${manifest.version}`);
        } catch (error) {
          throw new Error("An error occured while parsing plugin's code, possibly a syntax error?", {
            cause: error
          });
        }
        try {
          var api = createSChatPluginApi(id);
          pluginInstance2 = instantiator(api.object, (p) => {
            return Object.assign(p, {
              manifest
            });
          });
          if (!pluginInstance2)
            throw new Error(`Plugin '${id}' does not export a valid plugin instance`);
          apiObjects.set(id, api);
          pluginInstances.set(id, pluginInstance2);
        } catch (error) {
          throw new Error("An error occured while instantiating plugin's code", {
            cause: error
          });
        }
      } else {
        pluginInstance2 = corePluginInstances.get(id);
        assert(pluginInstance2, id, "start a non-existent core plugin");
        pluginInstances.set(id, pluginInstance2);
      }
      try {
        pluginInstance2.start?.();
        pluginSettings[id].enabled = true;
      } catch (error) {
        disableWhenThrown && disablePlugin(id);
        throw new Error("An error occured while starting the plugin", {
          cause: error
        });
      }
    });
    return _startPlugin.apply(this, arguments);
  }
  function stopPlugin(id) {
    var instance = pluginInstances.get(id);
    assert(instance, id, "stop a non-started plugin");
    instance.stop?.();
    var obj = apiObjects.get(id);
    obj?.disposers.forEach((d) => d());
    pluginInstances.delete(id);
  }
  function updateAllRepository() {
    return _updateAllRepository.apply(this, arguments);
  }
  function _updateAllRepository() {
    _updateAllRepository = _async_to_generator(function* () {
      try {
        yield updateRepository(OFFICIAL_PLUGINS_REPO_URL);
      } catch (error) {
        console.error("Failed to update official plugins repository", error);
      }
      yield allSettled(Object.keys(pluginRepositories).map(/* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* (repo) {
          if (repo !== OFFICIAL_PLUGINS_REPO_URL) {
            yield updateRepository(repo);
          }
        });
        return function(repo) {
          return _ref.apply(this, arguments);
        };
      }()));
    });
    return _updateAllRepository.apply(this, arguments);
  }
  function updatePlugins() {
    return _updatePlugins.apply(this, arguments);
  }
  function _updatePlugins() {
    _updatePlugins = _async_to_generator(function* () {
      yield awaitStorage2(pluginRepositories, pluginSettings);
      var corePlugins = getCorePlugins();
      for (var id in corePlugins) {
        var { default: instance, preenabled } = corePlugins[id];
        pluginSettings[id] ??= {
          enabled: preenabled ?? true
        };
        registeredPlugins.set(id, instance.manifest);
        corePluginInstances.set(id, instance);
      }
      yield updateAllRepository();
    });
    return _updatePlugins.apply(this, arguments);
  }
  function initPlugins() {
    return _initPlugins.apply(this, arguments);
  }
  function _initPlugins() {
    _initPlugins = _async_to_generator(function* () {
      yield awaitStorage2(pluginRepositories, pluginSettings);
      yield allSettled([
        ...registeredPlugins.keys()
      ].map(/* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* (id) {
          if (isPluginEnabled(id)) {
            yield startPlugin(id);
          }
        });
        return function(id) {
          return _ref.apply(this, arguments);
        };
      }()));
    });
    return _initPlugins.apply(this, arguments);
  }
  var corePluginInstances, registeredPlugins, pluginInstances, apiObjects, pluginRepositories, pluginSettings, _fetch, fetchJS, fetchJSON;
  var init_plugins4 = __esm({
    "src/lib/addons/plugins/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_plugins2();
      init_fs();
      init_storage2();
      init_utils();
      init_constants();
      init_common();
      init_api2();
      corePluginInstances = /* @__PURE__ */ new Map();
      registeredPlugins = /* @__PURE__ */ new Map();
      pluginInstances = /* @__PURE__ */ new Map();
      apiObjects = /* @__PURE__ */ new Map();
      pluginRepositories = createStorage2("plugins/repositories.json");
      pluginSettings = createStorage2("plugins/settings.json");
      _fetch = (repoUrl, path) => safeFetch(new URL(path, repoUrl), {
        cache: "no-store"
      });
      fetchJS = (repoUrl, path) => _fetch(repoUrl, path).then((r) => r.text());
      fetchJSON = (repoUrl, path) => _fetch(repoUrl, path).then((r) => r.json());
    }
  });

  // src/metro/common/stores.ts
  var UserStore;
  var init_stores = __esm({
    "src/metro/common/stores.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_wrappers();
      UserStore = findByStoreNameLazy("UserStore");
    }
  });

  // src/core/ui/settings/pages/Plugins/sheets/TitleComponent.tsx
  function TitleComponent({ plugin }) {
    var users = FluxUtils.useStateFromStoresArray([
      UserStore
    ], () => {
      plugin.authors?.forEach((a) => a.id && maybeFetchUser(a.id));
      return plugin.authors?.map((a) => UserStore.getUser(a.id));
    });
    var { authors } = plugin;
    var authorTextNode = [];
    if (authors) {
      var _loop2 = function(author2) {
        authorTextNode.push(/* @__PURE__ */ jsx(Text, {
          onPress: () => showUserProfileActionSheet({
            userId: author2.id
          }),
          variant: "text-md/medium",
          children: author2.name
        }));
        authorTextNode.push(", ");
      };
      for (var author of authors)
        _loop2(author);
      authorTextNode.pop();
    }
    return /* @__PURE__ */ jsxs(import_react_native19.View, {
      style: {
        gap: 4
      },
      children: [
        /* @__PURE__ */ jsx(import_react_native19.View, {
          children: /* @__PURE__ */ jsx(Text, {
            variant: "heading-xl/semibold",
            children: plugin.name
          })
        }),
        /* @__PURE__ */ jsx(import_react_native19.View, {
          style: {
            flexDirection: "row",
            flexShrink: 1
          },
          children: authors?.length && /* @__PURE__ */ jsxs(import_react_native19.View, {
            style: {
              flexDirection: "row",
              gap: 8,
              alignItems: "center",
              paddingVertical: 4,
              paddingHorizontal: 8,
              backgroundColor: "#00000016",
              borderRadius: 32
            },
            children: [
              users.length && /* @__PURE__ */ jsx(AvatarPile, {
                size: "xxsmall",
                names: plugin.authors?.map((a) => a.name),
                totalCount: plugin.authors?.length,
                children: users.map((a) => /* @__PURE__ */ jsx(Avatar, {
                  size: "xxsmall",
                  user: a
                }))
              }),
              /* @__PURE__ */ jsx(Text, {
                variant: "text-md/medium",
                children: authorTextNode
              })
            ]
          })
        })
      ]
    });
  }
  var import_react_native19, showUserProfileActionSheet, maybeFetchUser;
  var init_TitleComponent = __esm({
    "src/core/ui/settings/pages/Plugins/sheets/TitleComponent.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_lazy();
      init_metro();
      init_common();
      init_components();
      init_stores();
      import_react_native19 = __toESM(require_react_native());
      showUserProfileActionSheet = findByNameLazy("showUserProfileActionSheet");
      ({ getUser: maybeFetchUser } = lazyDestructure(() => findByProps("getUser", "fetchProfile")));
    }
  });

  // src/core/ui/settings/pages/Plugins/sheets/PluginInfoActionSheet.tsx
  var PluginInfoActionSheet_exports = {};
  __export(PluginInfoActionSheet_exports, {
    default: () => PluginInfoActionSheet
  });
  function PluginInfoIconButton(props) {
    var { onPress } = props;
    props.onPress &&= () => {
      hideSheet("PluginInfoActionSheet");
      onPress?.();
    };
    return /* @__PURE__ */ jsx(IconButton, {
      ...props
    });
  }
  function PluginInfoActionSheet({ plugin, navigation: navigation2 }) {
    plugin.usePluginState();
    return /* @__PURE__ */ jsx(ActionSheet, {
      children: /* @__PURE__ */ jsxs(import_react_native20.ScrollView, {
        contentContainerStyle: {
          gap: 12,
          marginBottom: 12
        },
        children: [
          /* @__PURE__ */ jsxs(import_react_native20.View, {
            style: {
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              paddingVertical: 24,
              justifyContent: "space-between",
              width: "100%"
            },
            children: [
              /* @__PURE__ */ jsx(TitleComponent, {
                plugin
              }),
              /* @__PURE__ */ jsx(ContextMenu, {
                items: [
                  {
                    label: "Details",
                    iconSource: findAssetId("CircleInformationIcon-primary"),
                    action: () => {
                    }
                  },
                  // {
                  //     label: true ? "Disable Updates" : "Enable Updates",
                  //     iconSource: true ? findAssetId("ClockXIcon") : findAssetId("ClockIcon"),
                  //     action: () => {
                  //     }
                  // },
                  {
                    label: "Clear Data",
                    iconSource: findAssetId("FileIcon"),
                    variant: "destructive",
                    action: () => {
                    }
                  },
                  {
                    label: "Uninstall",
                    iconSource: findAssetId("TrashIcon"),
                    variant: "destructive",
                    action: () => {
                    }
                  }
                ],
                children: (props) => /* @__PURE__ */ jsx(IconButton, {
                  ...props,
                  icon: findAssetId("MoreHorizontalIcon"),
                  variant: "secondary",
                  size: "sm"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs(import_react_native20.View, {
            style: {
              flexDirection: "row",
              justifyContent: "space-around",
              alignContent: "center"
            },
            children: [
              /* @__PURE__ */ jsx(PluginInfoIconButton, {
                label: "Configure",
                variant: "secondary",
                disabled: !plugin.getPluginSettingsComponent(),
                icon: findAssetId("WrenchIcon"),
                onPress: () => {
                  navigation2.push("SCHAT_CUSTOM_PAGE", {
                    title: plugin.name,
                    render: plugin.getPluginSettingsComponent()
                  });
                }
              }),
              /* @__PURE__ */ jsx(PluginInfoIconButton, {
                label: "Refetch",
                variant: "secondary",
                icon: findAssetId("RetryIcon"),
                onPress: () => {
                  startPlugin(plugin.id);
                }
              }),
              /* @__PURE__ */ jsx(PluginInfoIconButton, {
                label: "Copy URL",
                variant: "secondary",
                icon: findAssetId("LinkIcon"),
                onPress: () => {
                }
              })
            ]
          }),
          /* @__PURE__ */ jsxs(Card, {
            children: [
              /* @__PURE__ */ jsx(Text, {
                variant: "text-md/semibold",
                color: "text-primary",
                style: {
                  marginBottom: 4
                },
                children: "Description"
              }),
              /* @__PURE__ */ jsx(Text, {
                variant: "text-md/medium",
                children: plugin.description
              })
            ]
          })
        ]
      })
    });
  }
  var import_react_native20;
  var init_PluginInfoActionSheet = __esm({
    "src/core/ui/settings/pages/Plugins/sheets/PluginInfoActionSheet.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_plugins4();
      init_assets();
      init_sheets();
      init_components();
      import_react_native20 = __toESM(require_react_native());
      init_TitleComponent();
    }
  });

  // src/core/ui/settings/pages/Plugins/models/schat.ts
  function unifySChatPlugin(manifest) {
    return {
      id: manifest.id,
      name: manifest.display.name,
      description: manifest.display.description,
      authors: manifest.display.authors,
      getBadges() {
        return [
          {
            source: {
              uri: si_default
            }
          }
        ];
      },
      isEnabled: () => isPluginEnabled(manifest.id),
      isInstalled: () => manifest.id in pluginSettings,
      usePluginState() {
        useObservable([
          pluginSettings
        ]);
      },
      toggle(start) {
        try {
          start ? enablePlugin(manifest.id, true) : disablePlugin(manifest.id);
        } catch (e) {
          console.error(e);
        }
      },
      resolveSheetComponent() {
        return Promise.resolve().then(() => (init_PluginInfoActionSheet(), PluginInfoActionSheet_exports));
      },
      getPluginSettingsComponent() {
        return getPluginSettingsComponent(manifest.id);
      }
    };
  }
  var init_schat = __esm({
    "src/core/ui/settings/pages/Plugins/models/schat.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_settings3();
      init_plugins4();
      init_storage2();
    }
  });

  // src/core/ui/settings/pages/Plugins/sheets/VdPluginInfoActionSheet.tsx
  var VdPluginInfoActionSheet_exports = {};
  __export(VdPluginInfoActionSheet_exports, {
    default: () => PluginInfoActionSheet2
  });
  function PluginInfoActionSheet2({ plugin, navigation: navigation2 }) {
    plugin.usePluginState();
    var vdPlugin = VdPluginManager.plugins[plugin.id];
    var SettingsComponent = plugin.getPluginSettingsComponent();
    return /* @__PURE__ */ jsx(ActionSheet, {
      children: /* @__PURE__ */ jsxs(import_react_native21.ScrollView, {
        children: [
          /* @__PURE__ */ jsxs(import_react_native21.View, {
            style: {
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 24
            },
            children: [
              /* @__PURE__ */ jsx(Text, {
                variant: "heading-xl/semibold",
                children: plugin.name
              }),
              /* @__PURE__ */ jsx(import_react_native21.View, {
                style: {
                  marginLeft: "auto"
                },
                children: SettingsComponent && /* @__PURE__ */ jsx(Button, {
                  size: "md",
                  text: "Configure",
                  variant: "secondary",
                  icon: findAssetId("WrenchIcon"),
                  onPress: () => {
                    hideSheet("PluginInfoActionSheet");
                    navigation2.push("SCHAT_CUSTOM_PAGE", {
                      title: plugin.name,
                      render: SettingsComponent
                    });
                  }
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs(ActionSheetRow.Group, {
            children: [
              /* @__PURE__ */ jsx(ActionSheetRow, {
                label: Strings.REFETCH,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("RetryIcon")
                }),
                onPress: /* @__PURE__ */ _async_to_generator(function* () {
                  if (vdPlugin.enabled)
                    VdPluginManager.stopPlugin(plugin.id, false);
                  try {
                    yield VdPluginManager.fetchPlugin(plugin.id);
                    showToast(Strings.PLUGIN_REFETCH_SUCCESSFUL, findAssetId("toast_image_saved"));
                  } catch (e) {
                    showToast(Strings.PLUGIN_REFETCH_FAILED, findAssetId("Small"));
                  }
                  if (vdPlugin.enabled)
                    yield VdPluginManager.startPlugin(plugin.id);
                  hideSheet("PluginInfoActionSheet");
                })
              }),
              /* @__PURE__ */ jsx(ActionSheetRow, {
                label: Strings.COPY_URL,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("LinkIcon")
                }),
                onPress: () => {
                  clipboard.setString(plugin.id);
                  showToast.showCopyToClipboard();
                }
              }),
              /* @__PURE__ */ jsx(ActionSheetRow, {
                label: vdPlugin.update ? Strings.DISABLE_UPDATES : Strings.ENABLE_UPDATES,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("DownloadIcon")
                }),
                onPress: () => {
                  vdPlugin.update = !vdPlugin.update;
                  showToast(formatString("TOASTS_PLUGIN_UPDATE", {
                    update: vdPlugin.update,
                    name: plugin.name
                  }), findAssetId("toast_image_saved"));
                }
              }),
              /* @__PURE__ */ jsx(ActionSheetRow, {
                label: Strings.CLEAR_DATA,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  variant: "danger",
                  source: findAssetId("CopyIcon")
                }),
                variant: "danger",
                onPress: () => showConfirmationAlert({
                  title: Strings.HOLD_UP,
                  content: formatString("ARE_YOU_SURE_TO_CLEAR_DATA", {
                    name: plugin.name
                  }),
                  confirmText: Strings.CLEAR,
                  cancelText: Strings.CANCEL,
                  confirmColor: "red",
                  onConfirm: /* @__PURE__ */ _async_to_generator(function* () {
                    if (vdPlugin.enabled)
                      VdPluginManager.stopPlugin(plugin.id, false);
                    try {
                      yield VdPluginManager.fetchPlugin(plugin.id);
                      showToast(Strings.PLUGIN_REFETCH_SUCCESSFUL, findAssetId("toast_image_saved"));
                    } catch (e) {
                      showToast(Strings.PLUGIN_REFETCH_FAILED, findAssetId("Small"));
                    }
                    var message;
                    try {
                      purgeStorage(plugin.id);
                      message = [
                        "CLEAR_DATA_SUCCESSFUL",
                        "trash"
                      ];
                    } catch (e) {
                      message = [
                        "CLEAR_DATA_FAILED",
                        "Small"
                      ];
                    }
                    showToast(formatString(message[0], {
                      name: plugin.name
                    }), findAssetId(message[1]));
                    if (vdPlugin.enabled)
                      yield VdPluginManager.startPlugin(plugin.id);
                    hideSheet("PluginInfoActionSheet");
                  })
                })
              }),
              /* @__PURE__ */ jsx(ActionSheetRow, {
                label: Strings.DELETE,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  variant: "danger",
                  source: findAssetId("TrashIcon")
                }),
                variant: "danger",
                onPress: () => showConfirmationAlert({
                  title: Strings.HOLD_UP,
                  content: formatString("ARE_YOU_SURE_TO_DELETE_PLUGIN", {
                    name: plugin.name
                  }),
                  confirmText: Strings.DELETE,
                  cancelText: Strings.CANCEL,
                  confirmColor: "red",
                  onConfirm: () => {
                    try {
                      VdPluginManager.removePlugin(plugin.id);
                    } catch (e) {
                      showToast(String(e), findAssetId("Small"));
                    }
                    hideSheet("PluginInfoActionSheet");
                  }
                })
              })
            ]
          })
        ]
      })
    });
  }
  var import_react_native21;
  var init_VdPluginInfoActionSheet = __esm({
    "src/core/ui/settings/pages/Plugins/sheets/VdPluginInfoActionSheet.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_alerts2();
      init_plugins();
      init_storage();
      init_assets();
      init_common();
      init_components();
      init_sheets();
      init_toasts();
      import_react_native21 = __toESM(require_react_native());
    }
  });

  // src/core/ui/settings/pages/Plugins/models/vendetta.ts
  function unifyVdPlugin(vdPlugin) {
    return {
      id: vdPlugin.id,
      name: vdPlugin.manifest.name,
      description: vdPlugin.manifest.description,
      authors: vdPlugin.manifest.authors,
      icon: vdPlugin.manifest.vendetta?.icon,
      getBadges() {
        return [];
      },
      isEnabled: () => vdPlugin.enabled,
      isInstalled: () => Boolean(vdPlugin && VdPluginManager.plugins[vdPlugin.id]),
      usePluginState() {
        useProxy(VdPluginManager.plugins[vdPlugin.id]);
      },
      toggle(start) {
        start ? VdPluginManager.startPlugin(vdPlugin.id) : VdPluginManager.stopPlugin(vdPlugin.id);
      },
      resolveSheetComponent() {
        return Promise.resolve().then(() => (init_VdPluginInfoActionSheet(), VdPluginInfoActionSheet_exports));
      },
      getPluginSettingsComponent() {
        return VdPluginManager.getSettings(vdPlugin.id);
      }
    };
  }
  var init_vendetta = __esm({
    "src/core/ui/settings/pages/Plugins/models/vendetta.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_plugins();
      init_storage();
    }
  });

  // src/core/ui/settings/pages/Plugins/index.tsx
  var Plugins_exports = {};
  __export(Plugins_exports, {
    default: () => Plugins
  });
  function PluginPage(props) {
    var items = props.useItems();
    return /* @__PURE__ */ jsx(AddonPage, {
      CardComponent: PluginCard,
      title: Strings.PLUGINS,
      searchKeywords: [
        "name",
        "description",
        (p) => p.authors?.map((a) => typeof a === "string" ? a : a.name).join() || ""
      ],
      sortOptions: {
        "Name (A-Z)": (a, b3) => a.name.localeCompare(b3.name),
        "Name (Z-A)": (a, b3) => b3.name.localeCompare(a.name)
      },
      safeModeHint: {
        message: Strings.SAFE_MODE_NOTICE_PLUGINS
      },
      items,
      ...props
    });
  }
  function Plugins() {
    useProxy(settings);
    var navigation2 = NavigationNative.useNavigation();
    return /* @__PURE__ */ jsx(PluginPage, {
      useItems: () => {
        useProxy(VdPluginManager.plugins);
        useObservable([
          pluginSettings
        ]);
        var vdPlugins = Object.values(VdPluginManager.plugins).map(unifyVdPlugin);
        var bnPlugins = [
          ...registeredPlugins.values()
        ].filter((p) => isPluginInstalled(p.id) && !isCorePlugin(p.id)).map(unifySChatPlugin);
        return [
          ...vdPlugins,
          ...bnPlugins
        ];
      },
      ListHeaderComponent: () => {
        var unproxiedPlugins = Object.values(VdPluginManager.plugins).filter((p) => !p.id.startsWith(VD_PROXY_PREFIX) && !p.id.startsWith(SCHAT_PROXY_PREFIX));
        if (!unproxiedPlugins.length)
          return null;
        return /* @__PURE__ */ jsx(import_react_native22.View, {
          style: {
            marginVertical: 12,
            marginHorizontal: 10
          },
          children: /* @__PURE__ */ jsx(Card, {
            border: "strong",
            children: /* @__PURE__ */ jsxs(import_react_native22.View, {
              style: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"
              },
              children: [
                /* @__PURE__ */ jsxs(import_react_native22.View, {
                  style: {
                    gap: 6,
                    flexShrink: 1
                  },
                  children: [
                    /* @__PURE__ */ jsx(Text, {
                      variant: "heading-md/bold",
                      children: "Unproxied Plugins Found"
                    }),
                    /* @__PURE__ */ jsx(Text, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: "Plugins installed from unproxied sources may run unverified code in this app without your awareness."
                    })
                  ]
                }),
                /* @__PURE__ */ jsx(import_react_native22.View, {
                  style: {
                    marginLeft: "auto"
                  },
                  children: /* @__PURE__ */ jsx(IconButton, {
                    size: "sm",
                    variant: "secondary",
                    icon: findAssetId("CircleInformationIcon-primary"),
                    style: {
                      marginLeft: 8
                    },
                    onPress: () => {
                      navigation2.push("SCHAT_CUSTOM_PAGE", {
                        title: "Unproxied Plugins",
                        render: () => {
                          return /* @__PURE__ */ jsx(FlashList, {
                            data: unproxiedPlugins,
                            contentContainerStyle: {
                              padding: 8
                            },
                            ItemSeparatorComponent: () => /* @__PURE__ */ jsx(import_react_native22.View, {
                              style: {
                                height: 8
                              }
                            }),
                            renderItem: ({ item: p }) => /* @__PURE__ */ jsx(Card, {
                              children: /* @__PURE__ */ jsx(Text, {
                                variant: "heading-md/semibold",
                                children: p.id
                              })
                            })
                          });
                        }
                      });
                    }
                  })
                })
              ]
            })
          })
        });
      },
      ListFooterComponent: () => false,
      installAction: {
        label: "Install a plugin",
        fetchFn: /* @__PURE__ */ function() {
          var _ref = _async_to_generator(function* (url2) {
            if (!url2.startsWith(VD_PROXY_PREFIX) && !url2.startsWith(SCHAT_PROXY_PREFIX) && !settings.developerSettings) {
              openAlert2("schat-plugin-unproxied-confirmation", /* @__PURE__ */ jsx(AlertModal3, {
                title: "Hold On!",
                content: "You're trying to install a plugin from an unproxied external source. This means you're trusting the creator to run their code in this app without your knowledge. Are you sure you want to continue?",
                extraContent: /* @__PURE__ */ jsx(Card, {
                  children: /* @__PURE__ */ jsx(Text, {
                    variant: "text-md/bold",
                    children: url2
                  })
                }),
                actions: /* @__PURE__ */ jsxs(AlertActions2, {
                  children: [
                    /* @__PURE__ */ jsx(AlertActionButton3, {
                      text: "Continue",
                      variant: "primary",
                      onPress: () => {
                        VdPluginManager.installPlugin(url2).then(() => showToast(Strings.TOASTS_INSTALLED_PLUGIN, findAssetId("Check"))).catch((e) => openAlert2("schat-plugin-install-failed", /* @__PURE__ */ jsx(AlertModal3, {
                          title: "Install Failed",
                          content: `Unable to install plugin from '${url2}':`,
                          extraContent: /* @__PURE__ */ jsx(Card, {
                            children: /* @__PURE__ */ jsx(Text, {
                              variant: "text-md/normal",
                              children: e instanceof Error ? e.message : String(e)
                            })
                          }),
                          actions: /* @__PURE__ */ jsx(AlertActionButton3, {
                            text: "Okay",
                            variant: "primary"
                          })
                        })));
                      }
                    }),
                    /* @__PURE__ */ jsx(AlertActionButton3, {
                      text: "Cancel",
                      variant: "secondary"
                    })
                  ]
                })
              }));
            } else {
              return yield VdPluginManager.installPlugin(url2);
            }
          });
          return function(url2) {
            return _ref.apply(this, arguments);
          };
        }()
      }
    });
  }
  var import_react_native22, openAlert2, AlertModal3, AlertActions2, AlertActionButton3;
  var init_Plugins = __esm({
    "src/core/ui/settings/pages/Plugins/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_AddonPage();
      init_PluginCard();
      init_plugins();
      init_storage();
      init_plugins4();
      init_assets();
      init_settings();
      init_storage2();
      init_toasts();
      init_constants();
      init_lazy();
      init_metro();
      init_common();
      init_components();
      import_react_native22 = __toESM(require_react_native());
      init_schat();
      init_vendetta();
      ({ openAlert: openAlert2 } = lazyDestructure(() => findByProps("openAlert", "dismissAlert")));
      ({ AlertModal: AlertModal3, AlertActions: AlertActions2, AlertActionButton: AlertActionButton3 } = lazyDestructure(() => findByProps("AlertModal", "AlertActions")));
    }
  });

  // src/core/ui/components/AddonCard.tsx
  function AddonCard(props) {
    var styles = useStyles3();
    return /* @__PURE__ */ jsx(Card, {
      children: /* @__PURE__ */ jsxs(Stack, {
        spacing: 16,
        children: [
          /* @__PURE__ */ jsxs(import_react_native23.View, {
            style: {
              flexDirection: "row",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsxs(import_react_native23.View, {
                style: styles.headerLeading,
                children: [
                  /* @__PURE__ */ jsx(Text, {
                    style: styles.headerLabel,
                    children: props.headerLabel
                  }),
                  props.headerSublabel && /* @__PURE__ */ jsx(Text, {
                    style: styles.headerSubtitle,
                    children: props.headerSublabel
                  })
                ]
              }),
              /* @__PURE__ */ jsxs(import_react_native23.View, {
                style: [
                  styles.headerTrailing,
                  {
                    marginLeft: "auto"
                  }
                ],
                children: [
                  /* @__PURE__ */ jsxs(import_react_native23.View, {
                    style: styles.actions,
                    children: [
                      props.overflowActions && /* @__PURE__ */ jsx(IconButton, {
                        onPress: () => showSimpleActionSheet3({
                          key: "CardOverflow",
                          header: {
                            title: props.overflowTitle,
                            icon: props.headerIcon && /* @__PURE__ */ jsx(LegacyFormRow.Icon, {
                              style: {
                                marginRight: 8
                              },
                              source: findAssetId(props.headerIcon)
                            }),
                            onClose: () => hideActionSheet2()
                          },
                          options: props.overflowActions?.map((i) => ({
                            ...i,
                            icon: findAssetId(i.icon)
                          }))
                        }),
                        size: "sm",
                        variant: "secondary",
                        icon: findAssetId("CircleInformationIcon-primary")
                      }),
                      props.actions?.map(({ icon, onPress, disabled }) => /* @__PURE__ */ jsx(IconButton, {
                        onPress,
                        disabled,
                        size: "sm",
                        variant: "secondary",
                        icon: findAssetId(icon)
                      }))
                    ]
                  }),
                  props.toggleType && (props.toggleType === "switch" ? /* @__PURE__ */ jsx(FormSwitch, {
                    value: props.toggleValue(),
                    onValueChange: props.onToggleChange
                  }) : /* @__PURE__ */ jsx(import_react_native23.TouchableOpacity, {
                    onPress: () => {
                      props.onToggleChange?.(!props.toggleValue());
                    },
                    children: /* @__PURE__ */ jsx(FormRadio, {
                      selected: props.toggleValue()
                    })
                  }))
                ]
              })
            ]
          }),
          props.descriptionLabel && /* @__PURE__ */ jsx(Text, {
            variant: "text-md/medium",
            children: props.descriptionLabel
          })
        ]
      })
    });
  }
  var import_react_native23, hideActionSheet2, showSimpleActionSheet3, useStyles3;
  var init_AddonCard = __esm({
    "src/core/ui/components/AddonCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_assets();
      init_lazy();
      init_components();
      init_wrappers();
      init_color();
      init_styles();
      import_react_native23 = __toESM(require_react_native());
      ({ hideActionSheet: hideActionSheet2 } = lazyDestructure(() => findByProps("openLazy", "hideActionSheet")));
      ({ showSimpleActionSheet: showSimpleActionSheet3 } = lazyDestructure(() => findByProps("showSimpleActionSheet")));
      useStyles3 = createStyles({
        card: {
          backgroundColor: semanticColors?.CARD_SECONDARY_BG,
          borderRadius: 12,
          overflow: "hidden"
        },
        header: {
          padding: 0
        },
        headerLeading: {
          flexDirection: "column",
          justifyContent: "center",
          scale: 1.2
        },
        headerTrailing: {
          display: "flex",
          flexDirection: "row",
          gap: 15,
          alignItems: "center"
        },
        headerLabel: {
          ...TextStyleSheet["heading-md/semibold"],
          color: semanticColors.TEXT_NORMAL
        },
        headerSubtitle: {
          ...TextStyleSheet["text-md/semibold"],
          color: semanticColors.TEXT_MUTED
        },
        descriptionLabel: {
          ...TextStyleSheet["text-md/semibold"],
          color: semanticColors.TEXT_NORMAL
        },
        actions: {
          flexDirection: "row-reverse",
          alignItems: "center",
          gap: 5
        },
        iconStyle: {
          tintColor: semanticColors.LOGO_PRIMARY,
          opacity: 0.2,
          height: 64,
          width: 64,
          left: void 0,
          right: "30%",
          top: "-10%"
        }
      });
    }
  });

  // src/core/ui/settings/pages/Themes/ThemeCard.tsx
  function selectAndApply(value, theme) {
    try {
      selectTheme(value ? theme : null);
    } catch (e) {
      console.error("Error while selectAndApply,", e);
    }
  }
  function ThemeCard({ item: theme }) {
    useProxy(theme);
    var [removed, setRemoved] = React.useState(false);
    if (removed)
      return null;
    var { authors } = theme.data;
    return /* @__PURE__ */ jsx(AddonCard, {
      headerLabel: theme.data.name,
      headerSublabel: authors ? `by ${authors.map((i) => i.name).join(", ")}` : "",
      descriptionLabel: theme.data.description ?? "No description.",
      toggleType: !settings.safeMode?.enabled ? "radio" : void 0,
      toggleValue: () => themes[theme.id].selected,
      onToggleChange: (v2) => {
        selectAndApply(v2, theme);
      },
      overflowTitle: theme.data.name,
      overflowActions: [
        {
          icon: "ic_sync_24px",
          label: Strings.REFETCH,
          onPress: () => {
            fetchTheme(theme.id, theme.selected).then(() => {
              showToast(Strings.THEME_REFETCH_SUCCESSFUL, findAssetId("toast_image_saved"));
            }).catch(() => {
              showToast(Strings.THEME_REFETCH_FAILED, findAssetId("Small"));
            });
          }
        },
        {
          icon: "copy",
          label: Strings.COPY_URL,
          onPress: () => {
            clipboard.setString(theme.id);
            showToast.showCopyToClipboard();
          }
        },
        {
          icon: "ic_message_delete",
          label: Strings.DELETE,
          isDestructive: true,
          onPress: () => showConfirmationAlert({
            title: Strings.HOLD_UP,
            content: formatString("ARE_YOU_SURE_TO_DELETE_THEME", {
              name: theme.data.name
            }),
            confirmText: Strings.DELETE,
            cancelText: Strings.CANCEL,
            confirmColor: "red",
            onConfirm: () => {
              removeTheme(theme.id).then((wasSelected) => {
                setRemoved(true);
                if (wasSelected)
                  selectAndApply(false, theme);
              }).catch((e) => {
                showToast(e.message, findAssetId("Small"));
              });
            }
          })
        }
      ]
    });
  }
  var init_ThemeCard = __esm({
    "src/core/ui/settings/pages/Themes/ThemeCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_i18n();
      init_AddonCard();
      init_alerts2();
      init_storage();
      init_themes();
      init_assets();
      init_settings();
      init_common();
      init_toasts();
    }
  });

  // src/core/ui/settings/pages/Themes/index.tsx
  var Themes_exports = {};
  __export(Themes_exports, {
    default: () => Themes
  });
  function Themes() {
    useProxy(settings);
    useProxy(themes);
    return /* @__PURE__ */ jsx(AddonPage, {
      title: Strings.THEMES,
      searchKeywords: [
        "data.name",
        "data.description",
        (p) => p.data.authors?.map((a) => a.name).join(", ") ?? ""
      ],
      sortOptions: {
        "Name (A-Z)": (a, b3) => a.data.name.localeCompare(b3.data.name),
        "Name (Z-A)": (a, b3) => b3.data.name.localeCompare(a.data.name)
      },
      installAction: {
        label: "Install a theme",
        fetchFn: installTheme
      },
      items: Object.values(themes),
      safeModeHint: {
        message: formatString("SAFE_MODE_NOTICE_THEMES", {
          enabled: Boolean(settings.safeMode?.currentThemeId)
        }),
        footer: settings.safeMode?.currentThemeId && /* @__PURE__ */ jsx(Button, {
          size: "small",
          text: Strings.DISABLE_THEME,
          onPress: () => delete settings.safeMode?.currentThemeId,
          style: {
            marginTop: 8
          }
        })
      },
      CardComponent: ThemeCard,
      OptionsActionSheetComponent: () => {
        useObservable([
          colorsPref
        ]);
        return /* @__PURE__ */ jsxs(ActionSheet, {
          children: [
            /* @__PURE__ */ jsx(BottomSheetTitleHeader, {
              title: "Options"
            }),
            /* @__PURE__ */ jsxs(import_react_native24.View, {
              style: {
                paddingVertical: 20,
                gap: 12
              },
              children: [
                /* @__PURE__ */ jsxs(TableRadioGroup, {
                  title: "Override Theme Type",
                  value: colorsPref.type ?? "auto",
                  hasIcons: true,
                  onChange: (type) => {
                    colorsPref.type = type !== "auto" ? type : void 0;
                    getCurrentTheme()?.data && updateSChatColor(getCurrentTheme().data, {
                      update: true
                    });
                  },
                  children: [
                    /* @__PURE__ */ jsx(TableRadioRow, {
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: findAssetId("RobotIcon")
                      }),
                      label: "Auto",
                      value: "auto"
                    }),
                    /* @__PURE__ */ jsx(TableRadioRow, {
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: findAssetId("ThemeDarkIcon")
                      }),
                      label: "Dark",
                      value: "dark"
                    }),
                    /* @__PURE__ */ jsx(TableRadioRow, {
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: findAssetId("ThemeLightIcon")
                      }),
                      label: "Light",
                      value: "light"
                    })
                  ]
                }),
                /* @__PURE__ */ jsxs(TableRadioGroup, {
                  title: "Chat Background",
                  value: colorsPref.customBackground ?? "shown",
                  hasIcons: true,
                  onChange: (type) => {
                    colorsPref.customBackground = type !== "shown" ? type : null;
                  },
                  children: [
                    /* @__PURE__ */ jsx(TableRadioRow, {
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: findAssetId("ImageIcon")
                      }),
                      label: "Show",
                      value: "shown"
                    }),
                    /* @__PURE__ */ jsx(TableRadioRow, {
                      icon: /* @__PURE__ */ jsx(TableRowIcon, {
                        source: findAssetId("DenyIcon")
                      }),
                      label: "Hide",
                      value: "hidden"
                    })
                  ]
                })
              ]
            })
          ]
        });
      }
    });
  }
  var import_react_native24;
  var init_Themes = __esm({
    "src/core/ui/settings/pages/Themes/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_i18n();
      init_AddonPage();
      init_ThemeCard();
      init_storage();
      init_themes();
      init_preferences();
      init_updater();
      init_assets();
      init_settings();
      init_storage2();
      init_components();
      import_react_native24 = __toESM(require_react_native());
    }
  });

  // src/lib/addons/fonts/index.ts
  var fonts_exports = {};
  __export(fonts_exports, {
    fonts: () => fonts,
    installFont: () => installFont,
    removeFont: () => removeFont,
    saveFont: () => saveFont,
    selectFont: () => selectFont,
    updateFonts: () => updateFonts,
    validateFont: () => validateFont
  });
  function writeFont(font) {
    return _writeFont.apply(this, arguments);
  }
  function _writeFont() {
    _writeFont = _async_to_generator(function* (font) {
      if (!font && font !== null)
        throw new Error("Arg font must be a valid object or null");
      if (font) {
        yield writeFile("fonts.json", JSON.stringify(font));
      } else {
        yield removeFile("fonts.json");
      }
    });
    return _writeFont.apply(this, arguments);
  }
  function validateFont(font) {
    if (!font || typeof font !== "object")
      throw new Error("URL returned a null/non-object JSON");
    if (typeof font.spec !== "number")
      throw new Error("Invalid font 'spec' number");
    if (font.spec !== 1)
      throw new Error("Only fonts which follows spec:1 are supported");
    var requiredFields = [
      "name",
      "main"
    ];
    if (requiredFields.some((f) => !font[f]))
      throw new Error(`Font is missing one of the fields: ${requiredFields}`);
    if (font.name.startsWith("__"))
      throw new Error("Font names cannot start with __");
    if (font.name in fonts)
      throw new Error(`There is already a font named '${font.name}' installed`);
  }
  function saveFont(data) {
    return _saveFont.apply(this, arguments);
  }
  function _saveFont() {
    _saveFont = _async_to_generator(function* (data, selected = false) {
      var fontDefJson;
      if (typeof data === "object" && data.__source)
        data = data.__source;
      if (typeof data === "string") {
        try {
          fontDefJson = yield (yield safeFetch(data)).json();
          fontDefJson.__source = data;
        } catch (e) {
          throw new Error(`Failed to fetch fonts at ${data}`, {
            cause: e
          });
        }
      } else {
        fontDefJson = data;
      }
      validateFont(fontDefJson);
      try {
        yield Promise.all(Object.entries(fontDefJson.main).map(/* @__PURE__ */ function() {
          var _ref = _async_to_generator(function* ([font, url2]) {
            var ext = url2.split(".").pop();
            if (ext !== "ttf" && ext !== "otf")
              ext = "ttf";
            var path = `downloads/fonts/${fontDefJson.name}/${font}.${ext}`;
            if (!(yield fileExists(path)))
              yield downloadFile(url2, path);
          });
          return function(_2) {
            return _ref.apply(this, arguments);
          };
        }()));
      } catch (e) {
        throw new Error("Failed to download font assets", {
          cause: e
        });
      }
      fonts[fontDefJson.name] = fontDefJson;
      if (selected)
        writeFont(fonts[fontDefJson.name]);
      return fontDefJson;
    });
    return _saveFont.apply(this, arguments);
  }
  function installFont(url2) {
    return _installFont.apply(this, arguments);
  }
  function _installFont() {
    _installFont = _async_to_generator(function* (url2, selected = false) {
      if (typeof url2 !== "string" || Object.values(fonts).some((f) => typeof f === "object" && f.__source === url2)) {
        throw new Error("Invalid source or font was already installed");
      }
      var font = yield saveFont(url2);
      if (selected)
        yield selectFont(font.name);
    });
    return _installFont.apply(this, arguments);
  }
  function selectFont(name) {
    return _selectFont.apply(this, arguments);
  }
  function _selectFont() {
    _selectFont = _async_to_generator(function* (name) {
      if (name && !(name in fonts))
        throw new Error("Selected font does not exist!");
      if (name) {
        fonts.__selected = name;
      } else {
        delete fonts.__selected;
      }
      yield writeFont(name == null ? null : fonts[name]);
    });
    return _selectFont.apply(this, arguments);
  }
  function removeFont(name) {
    return _removeFont.apply(this, arguments);
  }
  function _removeFont() {
    _removeFont = _async_to_generator(function* (name) {
      var selected = fonts.__selected === name;
      if (selected)
        yield selectFont(null);
      delete fonts[name];
      try {
        yield clearFolder(`downloads/fonts/${name}`);
      } catch (e) {
      }
    });
    return _removeFont.apply(this, arguments);
  }
  function updateFonts() {
    return _updateFonts.apply(this, arguments);
  }
  function _updateFonts() {
    _updateFonts = _async_to_generator(function* () {
      yield awaitStorage(fonts);
      yield allSettled(Object.keys(fonts).map((name) => saveFont(fonts[name], fonts.__selected === name)));
    });
    return _updateFonts.apply(this, arguments);
  }
  var fonts;
  var init_fonts = __esm({
    "src/lib/addons/fonts/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_storage();
      init_fs();
      init_utils();
      fonts = wrapSync(createStorage(createMMKVBackend("SCHAT_FONTS")));
    }
  });

  // src/core/ui/settings/pages/Fonts/FontEditor.tsx
  function guessFontName(urls) {
    var fileNames = urls.map((url2) => {
      var { pathname } = new URL(url2);
      var fileName = pathname.replace(/\.[^/.]+$/, "");
      return fileName.split("/").pop();
    }).filter(Boolean);
    var shortest = fileNames.reduce((shortest2, name) => {
      return name.length < shortest2.length ? name : shortest2;
    }, fileNames[0] || "");
    return shortest?.replace(/-[A-Za-z]*$/, "") || null;
  }
  function RevengeFontsExtractor({ fonts: fonts2, setName }) {
    var currentTheme = getCurrentTheme().data;
    var themeFonts = currentTheme.fonts;
    var [fontName, setFontName] = (0, import_react6.useState)(guessFontName(Object.values(themeFonts)));
    var [error, setError] = (0, import_react6.useState)(void 0);
    return /* @__PURE__ */ jsxs(import_react_native25.View, {
      style: {
        padding: 8,
        paddingBottom: 16,
        gap: 12
      },
      children: [
        /* @__PURE__ */ jsx(TextInput, {
          autoFocus: true,
          size: "md",
          label: Strings.FONT_NAME,
          value: fontName,
          placeholder: fontName || "Whitney",
          onChange: setFontName,
          errorMessage: error,
          state: error ? "error" : void 0
        }),
        /* @__PURE__ */ jsx(Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: formatString("THEME_EXTRACTOR_DESC", {
            fonts: Object.keys(themeFonts).join(Strings.SEPARATOR)
          })
        }),
        /* @__PURE__ */ jsx(Button, {
          size: "md",
          variant: "primary",
          text: Strings.EXTRACT,
          disabled: !fontName,
          onPress: () => {
            if (!fontName)
              return;
            try {
              validateFont({
                spec: 1,
                name: fontName,
                main: themeFonts
              });
              setName(fontName);
              Object.assign(fonts2, themeFonts);
              actionSheet2.hideActionSheet();
            } catch (e) {
              setError(String(e));
            }
          }
        })
      ]
    });
  }
  function JsonFontImporter({ fonts: fonts2, setName, setSource }) {
    var [fontLink, setFontLink] = (0, import_react6.useState)("");
    var [saving, setSaving] = (0, import_react6.useState)(false);
    var [error, setError] = (0, import_react6.useState)(void 0);
    return /* @__PURE__ */ jsxs(import_react_native25.View, {
      style: {
        padding: 8,
        paddingBottom: 16,
        gap: 12
      },
      children: [
        /* @__PURE__ */ jsx(TextInput, {
          autoFocus: true,
          size: "md",
          label: "Font Link",
          value: fontLink,
          placeholder: "https://link.to/font/pack.json",
          onChange: setFontLink,
          errorMessage: error,
          state: error ? "error" : void 0
        }),
        /* @__PURE__ */ jsx(Button, {
          size: "md",
          variant: "primary",
          text: "Import",
          disabled: !fontLink || saving,
          loading: saving,
          onPress: () => {
            setSaving(true);
            _async_to_generator(function* () {
              var res = yield safeFetch(fontLink, {
                cache: "no-store"
              });
              var json = yield res.json();
              validateFont(json);
              setName(json.name);
              setSource(fontLink);
              Object.assign(fonts2, json.main);
            })().then(() => actionSheet2.hideActionSheet()).catch((e) => setError(String(e))).finally(() => setSaving(false));
          }
        })
      ]
    });
  }
  function EntryEditorActionSheet(props) {
    var [familyName, setFamilyName] = (0, import_react6.useState)(props.name);
    var [fontUrl, setFontUrl] = (0, import_react6.useState)(props.fontEntries[props.name]);
    return /* @__PURE__ */ jsxs(import_react_native25.View, {
      style: {
        padding: 8,
        paddingBottom: 16,
        gap: 12
      },
      children: [
        /* @__PURE__ */ jsx(TextInput, {
          autoFocus: true,
          size: "md",
          label: "Family Name (to override)",
          value: familyName,
          placeholder: "ggsans-Bold",
          onChange: setFamilyName
        }),
        /* @__PURE__ */ jsx(TextInput, {
          size: "md",
          label: "Font URL",
          value: fontUrl,
          placeholder: "https://link.to/the/font.ttf",
          onChange: setFontUrl
        }),
        /* @__PURE__ */ jsx(Button, {
          size: "md",
          variant: "primary",
          text: "Apply",
          onPress: () => {
            delete props.fontEntries[props.name];
            props.fontEntries[familyName] = fontUrl;
          }
        })
      ]
    });
  }
  function promptActionSheet(Component, fontEntries, props) {
    actionSheet2.openLazy(Promise.resolve({
      default: () => /* @__PURE__ */ jsx(ErrorBoundary, {
        children: /* @__PURE__ */ jsxs(ActionSheet, {
          children: [
            /* @__PURE__ */ jsx(BottomSheetTitleHeader, {
              title: "Import Font"
            }),
            /* @__PURE__ */ jsx(Component, {
              fonts: fontEntries,
              ...props
            })
          ]
        })
      })
    }), "FontEditorActionSheet");
  }
  function NewEntryRow({ fontEntry }) {
    var nameRef = (0, import_react6.useRef)();
    var urlRef = (0, import_react6.useRef)();
    var [nameSet, setNameSet] = (0, import_react6.useState)(false);
    var [error, setError] = (0, import_react6.useState)();
    return /* @__PURE__ */ jsxs(import_react_native25.View, {
      style: {
        flexDirection: "row",
        gap: 8,
        justifyContent: "flex-start"
      },
      children: [
        /* @__PURE__ */ jsx(import_react_native25.View, {
          style: {
            flex: 1
          },
          children: /* @__PURE__ */ jsx(TextInput, {
            isRound: true,
            size: "md",
            label: nameSet ? nameRef.current : void 0,
            placeholder: nameSet ? "https://path.to/the/file.ttf" : "PostScript name (e.g. ggsans-Bold)",
            leadingIcon: () => nameSet ? null : /* @__PURE__ */ jsx(TableRow.Icon, {
              source: findAssetId("PlusSmallIcon")
            }),
            leadingText: nameSet ? nameRef.current : "",
            onChange: (text) => (nameSet ? urlRef : nameRef).current = text,
            errorMessage: error,
            state: error ? "error" : void 0
          })
        }),
        nameSet && /* @__PURE__ */ jsx(IconButton, {
          size: "md",
          variant: "secondary",
          onPress: () => {
            nameRef.current = "";
            setNameSet(false);
          },
          icon: findAssetId("TrashIcon")
        }),
        /* @__PURE__ */ jsx(IconButton, {
          size: "md",
          variant: "primary",
          onPress: () => {
            if (!nameSet && nameRef.current) {
              setNameSet(true);
            } else if (nameSet && nameRef.current && urlRef.current) {
              try {
                var parsedUrl = new URL(urlRef.current);
                if (!parsedUrl.protocol || !parsedUrl.host) {
                  throw "Invalid URL";
                }
                fontEntry[nameRef.current] = urlRef.current;
                nameRef.current = void 0;
                urlRef.current = void 0;
                setNameSet(false);
              } catch (e) {
                setError(String(e));
              }
            }
          },
          icon: findAssetId(nameSet ? "PlusSmallIcon" : "ArrowLargeRightIcon")
        })
      ]
    });
  }
  function FontEditor(props) {
    var [name, setName] = (0, import_react6.useState)(props.name);
    var [source, setSource] = (0, import_react6.useState)();
    var [importing, setIsImporting] = (0, import_react6.useState)(false);
    var memoEntry = (0, import_react6.useMemo)(() => {
      return createProxy(props.name ? {
        ...fonts[props.name].main
      } : {}).proxy;
    }, [
      props.name
    ]);
    var fontEntries = useProxy(memoEntry);
    var navigation2 = NavigationNative.useNavigation();
    return /* @__PURE__ */ jsx(import_react_native25.ScrollView, {
      style: {
        flex: 1
      },
      contentContainerStyle: {
        paddingBottom: 38
      },
      children: /* @__PURE__ */ jsxs(Stack, {
        style: {
          paddingVertical: 24,
          paddingHorizontal: 12
        },
        spacing: 12,
        children: [
          !props.name ? /* @__PURE__ */ jsxs(TableRowGroup, {
            title: "Import",
            children: [
              getCurrentTheme()?.data?.fonts && /* @__PURE__ */ jsx(TableRow, {
                label: Strings.LABEL_EXTRACT_FONTS_FROM_THEME,
                subLabel: Strings.DESC_EXTRACT_FONTS_FROM_THEME,
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("HammerIcon")
                }),
                onPress: () => promptActionSheet(RevengeFontsExtractor, fontEntries, {
                  setName
                })
              }),
              /* @__PURE__ */ jsx(TableRow, {
                label: "Import font entries from a link",
                subLabel: "Directly import from a link with a pre-configured JSON file",
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("LinkIcon")
                }),
                onPress: () => promptActionSheet(JsonFontImporter, fontEntries, {
                  setName,
                  setSource
                })
              })
            ]
          }) : /* @__PURE__ */ jsxs(TableRowGroup, {
            title: "Actions",
            children: [
              /* @__PURE__ */ jsx(TableRow, {
                label: "Refetch fonts from source",
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("RetryIcon")
                }),
                onPress: /* @__PURE__ */ _async_to_generator(function* () {
                  var ftCopy = {
                    ...fonts[props.name]
                  };
                  yield removeFont(props.name);
                  yield saveFont(ftCopy);
                  navigation2.goBack();
                })
              }),
              /* @__PURE__ */ jsx(TableRow, {
                label: "Delete font pack",
                icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                  source: findAssetId("TrashIcon")
                }),
                onPress: () => removeFont(props.name).then(() => navigation2.goBack())
              })
            ]
          }),
          /* @__PURE__ */ jsx(TextInput, {
            size: "lg",
            value: name,
            label: Strings.FONT_NAME,
            placeholder: "Whitney",
            onChange: setName
          }),
          /* @__PURE__ */ jsxs(TableRowGroup, {
            title: "Font Entries",
            children: [
              Object.entries(fontEntries).map(([name2, url2]) => {
                return /* @__PURE__ */ jsx(TableRow, {
                  label: name2,
                  subLabel: url2,
                  trailing: /* @__PURE__ */ jsxs(Stack, {
                    spacing: 2,
                    direction: "horizontal",
                    children: [
                      /* @__PURE__ */ jsx(IconButton, {
                        size: "sm",
                        variant: "secondary",
                        icon: findAssetId("PencilIcon"),
                        onPress: () => promptActionSheet(EntryEditorActionSheet, fontEntries, {
                          name: name2,
                          fontEntries
                        })
                      }),
                      /* @__PURE__ */ jsx(IconButton, {
                        size: "sm",
                        variant: "secondary",
                        icon: findAssetId("TrashIcon"),
                        onPress: () => delete fontEntries[name2]
                      })
                    ]
                  })
                });
              }),
              /* @__PURE__ */ jsx(TableRow, {
                label: /* @__PURE__ */ jsx(NewEntryRow, {
                  fontEntry: fontEntries
                })
              })
            ]
          }),
          /* @__PURE__ */ jsx(import_react_native25.View, {
            style: {
              flexDirection: "row",
              justifyContent: "flex-end",
              bottom: 0,
              left: 0
            },
            children: /* @__PURE__ */ jsx(Button, {
              size: "lg",
              loading: importing,
              disabled: importing || !name || Object.keys(fontEntries).length === 0,
              variant: "primary",
              text: props.name ? "Save" : "Import",
              onPress: /* @__PURE__ */ _async_to_generator(function* () {
                if (!name)
                  return;
                setIsImporting(true);
                if (!props.name) {
                  saveFont({
                    spec: 1,
                    name,
                    main: fontEntries,
                    __source: source
                  }).then(() => navigation2.goBack()).finally(() => setIsImporting(false));
                } else {
                  Object.assign(fonts[props.name], {
                    name,
                    main: fontEntries,
                    __edited: true
                  });
                  setIsImporting(false);
                  navigation2.goBack();
                }
              }),
              icon: findAssetId(props.name ? "toast_image_saved" : "DownloadIcon"),
              style: {
                marginLeft: 8
              }
            })
          })
        ]
      })
    });
  }
  var import_react6, import_react_native25, actionSheet2;
  var init_FontEditor = __esm({
    "src/core/ui/settings/pages/Fonts/FontEditor.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_storage();
      init_fonts();
      init_themes();
      init_assets();
      init_utils();
      init_common();
      init_components();
      init_wrappers();
      init_components2();
      import_react6 = __toESM(require_react());
      import_react_native25 = __toESM(require_react_native());
      actionSheet2 = findByPropsLazy("hideActionSheet");
    }
  });

  // globals:@shopify/react-native-skia
  var require_react_native_skia = __commonJS({
    "globals:@shopify/react-native-skia"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["@shopify/react-native-skia"];
    }
  });

  // src/core/ui/settings/pages/Fonts/FontCard.tsx
  function FontPreview({ font }) {
    var TEXT_NORMAL = useToken2(tokens.colors.TEXT_NORMAL);
    var { fontFamily: fontFamilyList, fontSize } = TextStyleSheet["text-md/medium"];
    var fontFamily = fontFamilyList.split(/,/g)[0];
    var typeface = Skia.useFont(font.main[fontFamily])?.getTypeface();
    var paragraph = (0, import_react7.useMemo)(() => {
      if (!typeface)
        return null;
      var fMgr = SkiaApi.TypefaceFontProvider.Make();
      fMgr.registerFont(typeface, fontFamily);
      return SkiaApi.ParagraphBuilder.Make({}, fMgr).pushStyle({
        color: SkiaApi.Color(TEXT_NORMAL),
        fontFamilies: [
          fontFamily
        ],
        fontSize
      }).addText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.").pop().build();
    }, [
      typeface
    ]);
    return (
      // This does not work, actually :woeis:
      /* @__PURE__ */ jsx(import_react_native26.View, {
        style: {
          height: 64
        },
        children: typeface ? /* @__PURE__ */ jsx(Skia.Canvas, {
          style: {
            height: 64
          },
          children: /* @__PURE__ */ jsx(Skia.Paragraph, {
            paragraph,
            x: 0,
            y: 0,
            width: 300
          })
        }) : /* @__PURE__ */ jsx(import_react_native26.View, {
          style: {
            justifyContent: "center",
            alignItems: "center"
          },
          children: /* @__PURE__ */ jsx(Text, {
            color: "text-muted",
            variant: "heading-lg/semibold",
            children: "Loading..."
          })
        })
      })
    );
  }
  function FontCard({ item: font }) {
    useProxy(fonts);
    var navigation2 = NavigationNative.useNavigation();
    var selected = fonts.__selected === font.name;
    return /* @__PURE__ */ jsx(Card, {
      children: /* @__PURE__ */ jsxs(Stack, {
        spacing: 16,
        children: [
          /* @__PURE__ */ jsxs(import_react_native26.View, {
            style: {
              flexDirection: "row",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx(import_react_native26.View, {
                children: /* @__PURE__ */ jsx(Text, {
                  variant: "heading-lg/semibold",
                  children: font.name
                })
              }),
              /* @__PURE__ */ jsx(import_react_native26.View, {
                style: {
                  marginLeft: "auto"
                },
                children: /* @__PURE__ */ jsxs(Stack, {
                  spacing: 12,
                  direction: "horizontal",
                  children: [
                    /* @__PURE__ */ jsx(IconButton, {
                      onPress: () => {
                        navigation2.push("SCHAT_CUSTOM_PAGE", {
                          title: "Edit Font",
                          render: () => /* @__PURE__ */ jsx(FontEditor, {
                            name: font.name
                          })
                        });
                      },
                      size: "sm",
                      variant: "secondary",
                      disabled: selected,
                      icon: findAssetId("PencilIcon")
                    }),
                    /* @__PURE__ */ jsx(Button, {
                      size: "sm",
                      variant: selected ? "secondary" : "primary",
                      text: selected ? "Unapply" : "Apply",
                      onPress: /* @__PURE__ */ _async_to_generator(function* () {
                        yield selectFont(selected ? null : font.name);
                        showConfirmationAlert({
                          title: Strings.HOLD_UP,
                          content: "Reload Discord to apply changes?",
                          confirmText: Strings.RELOAD,
                          cancelText: Strings.CANCEL,
                          confirmColor: "red",
                          onConfirm: BundleUpdaterManager.reload
                        });
                      })
                    })
                  ]
                })
              })
            ]
          }),
          /* @__PURE__ */ jsx(FontPreview, {
            font
          })
        ]
      })
    });
  }
  var Skia, import_react7, import_react_native26, useToken2;
  var init_FontCard = __esm({
    "src/core/ui/settings/pages/Fonts/FontCard.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_alerts2();
      init_storage();
      init_fonts();
      init_assets();
      init_modules();
      init_lazy();
      init_metro();
      init_common();
      init_components();
      Skia = __toESM(require_react_native_skia());
      init_styles();
      import_react7 = __toESM(require_react());
      import_react_native26 = __toESM(require_react_native());
      init_FontEditor();
      ({ useToken: useToken2 } = lazyDestructure(() => findByProps("useToken")));
    }
  });

  // src/core/ui/settings/pages/Fonts/index.tsx
  var Fonts_exports = {};
  __export(Fonts_exports, {
    default: () => Fonts
  });
  function Fonts() {
    useProxy(settings);
    useProxy(fonts);
    var navigation2 = NavigationNative.useNavigation();
    return /* @__PURE__ */ jsx(AddonPage, {
      title: Strings.FONTS,
      searchKeywords: [
        "name",
        "description"
      ],
      sortOptions: {
        "Name (A-Z)": (a, b3) => a.name.localeCompare(b3.name),
        "Name (Z-A)": (a, b3) => b3.name.localeCompare(a.name)
      },
      items: Object.values(fonts),
      safeModeHint: {
        message: Strings.SAFE_MODE_NOTICE_FONTS
      },
      CardComponent: FontCard,
      installAction: {
        label: "Install a font",
        onPress: () => {
          navigation2.push("SCHAT_CUSTOM_PAGE", {
            title: "Import Font",
            render: () => /* @__PURE__ */ jsx(FontEditor, {})
          });
        }
      }
    });
  }
  var init_Fonts = __esm({
    "src/core/ui/settings/pages/Fonts/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_i18n();
      init_AddonPage();
      init_FontEditor();
      init_storage();
      init_fonts();
      init_settings();
      init_common();
      init_FontCard();
    }
  });

  // src/core/ui/hooks/useFS.ts
  function useFileExists(path, prefix) {
    var [state, setState] = (0, import_react8.useState)(2);
    var check = () => fileExists(path, {
      prefix
    }).then((exists) => setState(exists ? 1 : 0)).catch(() => setState(3));
    var customFS = (0, import_react8.useMemo)(() => new Proxy(fs_exports, {
      get(target, p, receiver) {
        var val = Reflect.get(target, p, receiver);
        if (typeof val !== "function")
          return;
        return (...args) => {
          var promise = (check(), val(...args));
          if (promise?.constructor?.name === "Promise") {
            setState(2);
            promise.finally(check);
          }
          return promise;
        };
      }
    }), []);
    (0, import_react8.useEffect)(() => void check(), []);
    return [
      state,
      customFS
    ];
  }
  var import_react8, CheckState;
  var init_useFS = __esm({
    "src/core/ui/hooks/useFS.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_fs();
      import_react8 = __toESM(require_react());
      (function(CheckState2) {
        CheckState2[CheckState2["FALSE"] = 0] = "FALSE";
        CheckState2[CheckState2["TRUE"] = 1] = "TRUE";
        CheckState2[CheckState2["LOADING"] = 2] = "LOADING";
        CheckState2[CheckState2["ERROR"] = 3] = "ERROR";
      })(CheckState || (CheckState = {}));
    }
  });

  // src/core/ui/settings/pages/Developer/AssetDisplay.tsx
  function AssetDisplay({ asset }) {
    return /* @__PURE__ */ jsx(LegacyFormRow, {
      label: `${asset.name} - ${asset.id}`,
      trailing: /* @__PURE__ */ jsx(import_react_native27.Image, {
        source: asset.id,
        style: {
          width: 32,
          height: 32
        }
      }),
      onPress: () => {
        clipboard.setString(asset.name);
        showToast.showCopyToClipboard();
      }
    });
  }
  var import_react_native27;
  var init_AssetDisplay = __esm({
    "src/core/ui/settings/pages/Developer/AssetDisplay.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_common();
      init_components();
      init_toasts();
      import_react_native27 = __toESM(require_react_native());
    }
  });

  // src/core/ui/settings/pages/Developer/AssetBrowser.tsx
  function AssetBrowser() {
    var [search, setSearch] = React.useState("");
    var all = (0, import_react9.useMemo)(() => Array.from(iterateAssets()), []);
    return /* @__PURE__ */ jsx(ErrorBoundary, {
      children: /* @__PURE__ */ jsxs(import_react_native28.View, {
        style: {
          flex: 1
        },
        children: [
          /* @__PURE__ */ jsx(Search_default, {
            style: {
              margin: 10
            },
            onChangeText: (v2) => setSearch(v2)
          }),
          /* @__PURE__ */ jsx(import_react_native28.FlatList, {
            data: all.filter((a) => a.name.includes(search) || a.id.toString() === search),
            renderItem: ({ item }) => /* @__PURE__ */ jsx(AssetDisplay, {
              asset: item
            }),
            ItemSeparatorComponent: LegacyFormDivider,
            keyExtractor: (item) => item.name
          })
        ]
      })
    });
  }
  var import_react9, import_react_native28;
  var init_AssetBrowser = __esm({
    "src/core/ui/settings/pages/Developer/AssetBrowser.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_AssetDisplay();
      init_assets();
      init_components();
      init_components2();
      import_react9 = __toESM(require_react());
      import_react_native28 = __toESM(require_react_native());
    }
  });

  // src/core/ui/settings/pages/Developer/index.tsx
  var Developer_exports = {};
  __export(Developer_exports, {
    default: () => Developer
  });
  function Developer() {
    var [rdtFileExists, fs] = useFileExists("preloads/reactDevtools.js");
    var styles = useStyles4();
    var navigation2 = NavigationNative.useNavigation();
    useProxy(settings);
    useProxy(loaderConfig);
    return /* @__PURE__ */ jsx(ErrorBoundary, {
      children: /* @__PURE__ */ jsx(import_react_native29.ScrollView, {
        style: {
          flex: 1
        },
        contentContainerStyle: {
          paddingBottom: 38
        },
        children: /* @__PURE__ */ jsxs(Stack, {
          style: {
            paddingVertical: 24,
            paddingHorizontal: 12
          },
          spacing: 24,
          children: [
            /* @__PURE__ */ jsx(TextInput, {
              label: Strings.DEBUGGER_URL,
              placeholder: "127.0.0.1:9090",
              size: "md",
              leadingIcon: () => /* @__PURE__ */ jsx(LegacyFormText, {
                style: styles.leadingText,
                children: "ws://"
              }),
              defaultValue: settings.debuggerUrl,
              onChange: (v2) => settings.debuggerUrl = v2
            }),
            /* @__PURE__ */ jsxs(TableRowGroup, {
              title: Strings.DEBUG,
              children: [
                /* @__PURE__ */ jsx(TableRow, {
                  label: Strings.CONNECT_TO_DEBUG_WEBSOCKET,
                  icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                    source: findAssetId("copy")
                  }),
                  onPress: () => connectToDebugger(settings.debuggerUrl)
                }),
                isReactDevToolsPreloaded() && /* @__PURE__ */ jsx(Fragment, {
                  children: /* @__PURE__ */ jsx(TableRow, {
                    label: Strings.CONNECT_TO_REACT_DEVTOOLS,
                    icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                      source: findAssetId("ic_badge_staff")
                    }),
                    onPress: () => window[getReactDevToolsProp() || "__vendetta_rdc"]?.connectToDevTools({
                      host: settings.debuggerUrl.split(":")?.[0],
                      resolveRNStyle: import_react_native29.StyleSheet.flatten
                    })
                  })
                })
              ]
            }),
            isLoaderConfigSupported() && /* @__PURE__ */ jsx(Fragment, {
              children: /* @__PURE__ */ jsxs(TableRowGroup, {
                title: "Loader config",
                children: [
                  /* @__PURE__ */ jsx(TableSwitchRow, {
                    label: Strings.LOAD_FROM_CUSTOM_URL,
                    subLabel: Strings.LOAD_FROM_CUSTOM_URL_DEC,
                    icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                      source: findAssetId("copy")
                    }),
                    value: loaderConfig.customLoadUrl.enabled,
                    onValueChange: (v2) => {
                      loaderConfig.customLoadUrl.enabled = v2;
                    }
                  }),
                  loaderConfig.customLoadUrl.enabled && /* @__PURE__ */ jsx(TableRow, {
                    label: /* @__PURE__ */ jsx(TextInput, {
                      defaultValue: loaderConfig.customLoadUrl.url,
                      size: "md",
                      onChange: (v2) => loaderConfig.customLoadUrl.url = v2,
                      placeholder: "http://localhost:4040/vendetta.js",
                      label: Strings.SCHAT_URL
                    })
                  }),
                  isReactDevToolsPreloaded() && isVendettaLoader() && /* @__PURE__ */ jsx(TableSwitchRow, {
                    label: Strings.LOAD_REACT_DEVTOOLS,
                    subLabel: `${Strings.VERSION}: ${getReactDevToolsVersion()}`,
                    icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                      source: findAssetId("ic_badge_staff")
                    }),
                    value: loaderConfig.loadReactDevTools,
                    onValueChange: (v2) => {
                      loaderConfig.loadReactDevTools = v2;
                    }
                  })
                ]
              })
            }),
            /* @__PURE__ */ jsxs(TableRowGroup, {
              title: "Other",
              children: [
                /* @__PURE__ */ jsx(TableRow, {
                  arrow: true,
                  label: Strings.ASSET_BROWSER,
                  icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                    source: findAssetId("ic_image")
                  }),
                  trailing: TableRow.Arrow,
                  onPress: () => navigation2.push("SCHAT_CUSTOM_PAGE", {
                    title: Strings.ASSET_BROWSER,
                    render: AssetBrowser
                  })
                }),
                /* @__PURE__ */ jsx(TableRow, {
                  arrow: true,
                  label: Strings.ERROR_BOUNDARY_TOOLS_LABEL,
                  icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                    source: findAssetId("ic_warning_24px")
                  }),
                  onPress: () => showSimpleActionSheet4({
                    key: "ErrorBoundaryTools",
                    header: {
                      title: "Which ErrorBoundary do you want to trip?",
                      icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                        style: {
                          marginRight: 8
                        },
                        source: findAssetId("ic_warning_24px")
                      }),
                      onClose: () => hideActionSheet3()
                    },
                    options: [
                      // @ts-expect-error
                      // Of course, to trigger an error, we need to do something incorrectly. The below will do!
                      {
                        label: Strings.SCHAT,
                        onPress: () => navigation2.push("SCHAT_CUSTOM_PAGE", {
                          render: () => /* @__PURE__ */ jsx("undefined", {})
                        })
                      },
                      {
                        label: "Discord",
                        isDestructive: true,
                        onPress: () => navigation2.push("SCHAT_CUSTOM_PAGE", {
                          noErrorBoundary: true
                        })
                      }
                    ]
                  })
                }),
                /* @__PURE__ */ jsx(TableRow, {
                  label: Strings.INSTALL_REACT_DEVTOOLS,
                  subLabel: Strings.RESTART_REQUIRED_TO_TAKE_EFFECT,
                  icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                    source: findAssetId("DownloadIcon")
                  }),
                  trailing: /* @__PURE__ */ jsx(Button, {
                    size: "sm",
                    loading: rdtFileExists === CheckState.LOADING,
                    disabled: rdtFileExists === CheckState.LOADING,
                    variant: rdtFileExists === CheckState.TRUE ? "secondary" : "primary",
                    text: rdtFileExists === CheckState.TRUE ? Strings.UNINSTALL : Strings.INSTALL,
                    onPress: /* @__PURE__ */ _async_to_generator(function* () {
                      if (rdtFileExists === CheckState.FALSE) {
                        fs.downloadFile(RDT_EMBED_LINK, "preloads/reactDevtools.js");
                      } else if (rdtFileExists === CheckState.TRUE) {
                        fs.removeFile("preloads/reactDevtools.js");
                      }
                    }),
                    icon: findAssetId(rdtFileExists === CheckState.TRUE ? "ic_message_delete" : "DownloadIcon"),
                    style: {
                      marginLeft: 8
                    }
                  })
                }),
                /* @__PURE__ */ jsx(TableSwitchRow, {
                  label: Strings.ENABLE_EVAL_COMMAND,
                  subLabel: Strings.ENABLE_EVAL_COMMAND_DESC,
                  icon: /* @__PURE__ */ jsx(TableRow.Icon, {
                    source: findAssetId("PencilIcon")
                  }),
                  value: settings.enableEvalCommand,
                  onValueChange: (v2) => {
                    settings.enableEvalCommand = v2;
                  }
                })
              ]
            })
          ]
        })
      })
    });
  }
  var import_react_native29, hideActionSheet3, showSimpleActionSheet4, RDT_EMBED_LINK, useStyles4;
  var init_Developer = __esm({
    "src/core/ui/settings/pages/Developer/index.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_jsxRuntime();
      init_i18n();
      init_useFS();
      init_AssetBrowser();
      init_storage();
      init_assets();
      init_debug();
      init_loader();
      init_settings();
      init_lazy();
      init_common();
      init_components();
      init_wrappers();
      init_color();
      init_components2();
      init_styles();
      import_react_native29 = __toESM(require_react_native());
      ({ hideActionSheet: hideActionSheet3 } = lazyDestructure(() => findByProps("openLazy", "hideActionSheet")));
      ({ showSimpleActionSheet: showSimpleActionSheet4 } = lazyDestructure(() => findByProps("showSimpleActionSheet")));
      RDT_EMBED_LINK = "https://raw.githubusercontent.com/amsyarasyiq/rdt-embedder/main/dist.js";
      useStyles4 = createStyles({
        leadingText: {
          ...TextStyleSheet["heading-md/semibold"],
          color: semanticColors.TEXT_MUTED,
          marginRight: -4
        }
      });
    }
  });

  // src/core/ui/settings/index.ts
  function initSettings() {
    registerSection({
      name: "SChat",
      items: [
        {
          key: "SCHAT",
          title: () => Strings.SCHAT,
          icon: {
            uri: si_default
          },
          render: () => Promise.resolve().then(() => (init_General(), General_exports)),
          useTrailing: () => `(${"f4c160c-main"})`
        },
        {
          key: "SCHAT_PLUGINS",
          title: () => Strings.PLUGINS,
          icon: findAssetId("ActivitiesIcon"),
          render: () => Promise.resolve().then(() => (init_Plugins(), Plugins_exports))
        },
        {
          key: "SCHAT_THEMES",
          title: () => Strings.THEMES,
          icon: findAssetId("PaintPaletteIcon"),
          render: () => Promise.resolve().then(() => (init_Themes(), Themes_exports)),
          usePredicate: () => isThemeSupported()
        },
        {
          key: "SCHAT_FONTS",
          title: () => Strings.FONTS,
          icon: findAssetId("ic_add_text"),
          render: () => Promise.resolve().then(() => (init_Fonts(), Fonts_exports)),
          usePredicate: () => isFontSupported()
        },
        {
          key: "SHCAT_DEVELOPER",
          title: () => Strings.DEVELOPER,
          icon: findAssetId("WrenchIcon"),
          render: () => Promise.resolve().then(() => (init_Developer(), Developer_exports)),
          usePredicate: () => useProxy(settings).developerSettings ?? false
        }
      ]
    });
    registerSection({
      name: "Vendetta",
      items: []
    });
  }
  var init_settings3 = __esm({
    "src/core/ui/settings/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_si();
      init_i18n();
      init_storage();
      init_assets();
      init_loader();
      init_settings();
      init_settings2();
    }
  });

  // globals:lodash
  var require_lodash = __commonJS({
    "globals:lodash"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["lodash"];
    }
  });

  // globals:util
  var require_util = __commonJS({
    "globals:util"(exports, module) {
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      module.exports = require_depsModule()["util"];
    }
  });

  // src/core/vendetta/api.tsx
  var import_react10, import_react_native30, initVendettaObject;
  var init_api3 = __esm({
    "src/core/vendetta/api.tsx"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_jsxRuntime();
      init_alerts2();
      init_storage();
      init_storage();
      init_themes();
      init_assets();
      init_commands();
      init_debug();
      init_loader();
      init_patcher();
      init_settings();
      init_utils();
      init_cyrb64();
      init_logger();
      init_metro();
      init_common();
      init_components();
      init_components();
      init_color();
      init_components2();
      init_styles();
      init_toasts();
      init_dist();
      import_react10 = __toESM(require_react());
      import_react_native30 = __toESM(require_react_native());
      init_plugins();
      initVendettaObject = () => {
        var createStackBasedFilter = (fn) => {
          return (filter) => {
            return fn(factories_exports.createSimpleFilter(filter, cyrb64Hash(new Error().stack)));
          };
        };
        var api = window.vendetta = {
          patcher: {
            before: patcher_default.before,
            after: patcher_default.after,
            instead: patcher_default.instead
          },
          metro: {
            modules: window.modules,
            find: createStackBasedFilter(findExports),
            findAll: createStackBasedFilter(findAllExports),
            findByProps: (...props) => {
              if (props.length === 1 && props[0] === "KeyboardAwareScrollView") {
                props.push("listenToKeyboardEvents");
              }
              var ret = findByProps(...props);
              if (ret == null) {
                if (props.includes("ActionSheetTitleHeader")) {
                  var module = findByProps("ActionSheetRow");
                  return {
                    ...module,
                    ActionSheetTitleHeader: module.BottomSheetTitleHeader,
                    ActionSheetContentContainer: ({ children }) => {
                      (0, import_react10.useEffect)(() => console.warn("Discord has removed 'ActionSheetContentContainer', please move into something else. This has been temporarily replaced with View"), []);
                      return /* @__PURE__ */ (0, import_react10.createElement)(import_react_native30.View, null, children);
                    }
                  };
                }
              }
              return ret;
            },
            findByPropsAll: (...props) => findByPropsAll(...props),
            findByName: (name, defaultExp) => {
              if (name === "create" && typeof defaultExp === "undefined") {
                return findByName("create", false).default;
              }
              return findByName(name, defaultExp ?? true);
            },
            findByNameAll: (name, defaultExp = true) => findByNameAll(name, defaultExp),
            findByDisplayName: (displayName, defaultExp = true) => findByDisplayName(displayName, defaultExp),
            findByDisplayNameAll: (displayName, defaultExp = true) => findByDisplayNameAll(displayName, defaultExp),
            findByTypeName: (typeName, defaultExp = true) => findByTypeName(typeName, defaultExp),
            findByTypeNameAll: (typeName, defaultExp = true) => findByTypeNameAll(typeName, defaultExp),
            findByStoreName: (name) => findByStoreName(name),
            common: {
              constants,
              channels,
              i18n,
              url,
              toasts,
              stylesheet: {
                createThemedStyleSheet
              },
              clipboard,
              assets,
              invites,
              commands,
              navigation,
              navigationStack,
              NavigationNative,
              Flux,
              FluxDispatcher,
              React: React2,
              ReactNative,
              moment: require_moment(),
              chroma: require_chroma_js(),
              lodash: require_lodash(),
              util: require_util()
            }
          },
          constants: {
            DISCORD_SERVER: "https://discord.gg/n9QQ4XhhJP",
            GITHUB: "https://github.com/vendetta-mod",
            PROXY_PREFIX: "https://vd-plugins.github.io/proxy",
            HTTP_REGEX: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/,
            HTTP_REGEX_MULTI: /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)/g,
            DISCORD_SERVER_ID: "1015931589865246730",
            PLUGINS_CHANNEL_ID: "1091880384561684561",
            THEMES_CHANNEL_ID: "1091880434939482202"
          },
          utils: {
            findInReactTree: (tree, filter) => findInReactTree(tree, filter),
            findInTree: (tree, filter, options) => findInTree(tree, filter, options),
            safeFetch: (input, options, timeout) => safeFetch(input, options, timeout),
            unfreeze: (obj) => Object.isFrozen(obj) ? {
              ...obj
            } : obj,
            without: (object, ...keys) => omit(object, keys)
          },
          debug: {
            connectToDebugger: (url2) => connectToDebugger(url2),
            getDebugInfo: () => getDebugInfo()
          },
          ui: {
            components: {
              Forms,
              General: ReactNative,
              Alert: LegacyAlert,
              Button: CompatButton,
              HelpMessage: (...props) => /* @__PURE__ */ jsx(HelpMessage, {
                ...props
              }),
              SafeAreaView: (...props) => /* @__PURE__ */ jsx(SafeAreaView, {
                ...props
              }),
              Summary,
              ErrorBoundary,
              Codeblock,
              Search: Search_default
            },
            toasts: {
              showToast: (content, asset) => showToast(content, asset)
            },
            alerts: {
              showConfirmationAlert: (options) => showConfirmationAlert(options),
              showCustomAlert: (component, props) => showCustomAlert(component, props),
              showInputAlert: (options) => showInputAlert(options)
            },
            assets: {
              all: new Proxy({}, {
                get(cache, p) {
                  if (typeof p !== "string")
                    return void 0;
                  if (cache[p])
                    return cache[p];
                  for (var asset of iterateAssets()) {
                    if (asset.name)
                      return cache[p] = asset;
                  }
                },
                ownKeys(cache) {
                  var keys = /* @__PURE__ */ new Set();
                  for (var asset of iterateAssets()) {
                    cache[asset.name] = asset;
                    keys.add(asset.name);
                  }
                  return [
                    ...keys
                  ];
                }
              }),
              find: (filter) => findAsset(filter),
              getAssetByName: (name) => findAsset(name),
              getAssetByID: (id) => findAsset(id),
              getAssetIDByName: (name) => findAssetId(name)
            },
            semanticColors,
            rawColors
          },
          plugins: {
            plugins: VdPluginManager.plugins,
            fetchPlugin: (source) => VdPluginManager.fetchPlugin(source),
            installPlugin: (source, enabled = true) => VdPluginManager.installPlugin(source, enabled),
            startPlugin: (id) => VdPluginManager.startPlugin(id),
            stopPlugin: (id, disable = true) => VdPluginManager.stopPlugin(id, disable),
            removePlugin: (id) => VdPluginManager.removePlugin(id),
            getSettings: (id) => VdPluginManager.getSettings(id)
          },
          themes: {
            themes,
            fetchTheme: (id, selected) => fetchTheme(id, selected),
            installTheme: (id) => installTheme(id),
            selectTheme: (id) => selectTheme(id === "default" ? null : themes[id]),
            removeTheme: (id) => removeTheme(id),
            getCurrentTheme: () => getThemeFromLoader(),
            updateThemes: () => updateThemes()
          },
          commands: {
            registerCommand
          },
          storage: {
            createProxy: (target) => createProxy(target),
            useProxy: (_storage) => useProxy(_storage),
            createStorage: (backend) => createStorage(backend),
            wrapSync: (store) => wrapSync(store),
            awaitSyncWrapper: (store) => awaitStorage(store),
            createMMKVBackend: (store) => createMMKVBackend(store),
            createFileBackend: (file) => {
              if (isPyonLoader() && file === "vendetta_theme.json") {
                file = "schat/current-theme.json";
              }
              return createFileBackend(file);
            }
          },
          settings,
          loader: {
            identity: getVendettaLoaderIdentity() ?? void 0,
            config: loaderConfig
          },
          logger: {
            log: (...message) => console.log(...message),
            info: (...message) => console.info(...message),
            warn: (...message) => console.warn(...message),
            error: (...message) => console.error(...message),
            time: (...message) => console.time(...message),
            trace: (...message) => console.trace(...message),
            verbose: (...message) => console.log(...message)
          },
          version: versionHash,
          unload: () => {
            delete window.vendetta;
          }
        };
        return () => api.unload();
      };
    }
  });

  // src/global.d.ts
  var init_global_d = __esm({
    "src/global.d.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/modules.d.ts
  var init_modules_d = __esm({
    "src/modules.d.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
    }
  });

  // src/lib/ui/index.ts
  var ui_exports = {};
  __export(ui_exports, {
    alerts: () => alerts_exports,
    components: () => components_exports2,
    settings: () => settings_exports2,
    sheets: () => sheets_exports,
    styles: () => styles_exports,
    toasts: () => toasts_exports
  });
  var init_ui = __esm({
    "src/lib/ui/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_alerts();
      init_components2();
      init_settings2();
      init_sheets();
      init_styles();
      init_toasts();
    }
  });

  // src/lib/index.ts
  var lib_exports = {};
  __export(lib_exports, {
    _jsx: () => jsxRuntime_exports,
    api: () => api_exports,
    fonts: () => fonts_exports,
    managers: () => managers,
    metro: () => metro_exports,
    plugins: () => plugins_exports2,
    themes: () => themes_exports,
    ui: () => ui_exports,
    unload: () => unload,
    utils: () => utils_exports
  });
  function unload() {
    for (var d of _disposer)
      if (typeof d === "function")
        d();
    delete window.schat;
  }
  var managers, _disposer;
  var init_lib = __esm({
    "src/lib/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_global_d();
      init_modules_d();
      init_fonts();
      init_plugins4();
      init_themes();
      init_api();
      init_ui();
      init_utils();
      init_metro();
      init_fonts();
      init_plugins4();
      init_themes();
      init_jsxRuntime();
      init_lazy();
      managers = proxyLazy(() => {
        console.warn("schat.managers.* is deprecated, and moved the top level (schat.*). schat.managers will be eventually removed soon");
        return {
          get fonts() {
            return fonts_exports;
          },
          get plugins() {
            return plugins_exports2;
          },
          get themes() {
            return themes_exports;
          }
        };
      }, {
        hint: "object"
      });
      _disposer = [];
      unload.push = (fn) => {
        _disposer.push(fn);
      };
    }
  });

  // src/index.ts
  var src_exports = {};
  __export(src_exports, {
    default: () => src_default
  });
  var src_default;
  var init_src = __esm({
    "src/index.ts"() {
      "use strict";
      init_asyncIteratorSymbol();
      init_promiseAllSettled();
      init_async_to_generator();
      init_patchErrorBoundary();
      init_fixes();
      init_i18n();
      init_settings3();
      init_api3();
      init_plugins();
      init_fonts();
      init_plugins4();
      init_themes();
      init_commands();
      init_debug();
      init_flux();
      init_jsx();
      init_logger();
      init_settings2();
      init_lib();
      src_default = /* @__PURE__ */ _async_to_generator(function* () {
        yield Promise.all([
          initThemes(),
          injectFluxInterceptor(),
          patchSettings(),
          patchLogHook(),
          patchCommands(),
          patchJsx(),
          initVendettaObject(),
          initFetchI18nStrings(),
          initSettings(),
          fixes_default(),
          patchErrorBoundary(),
          updatePlugins()
        ]).then(
          // Push them all to unloader
          (u) => u.forEach((f) => f && unload.push(f))
        );
        window.schat = lib_exports;
        VdPluginManager.initPlugins().then((u) => unload.push(u)).catch(() => alert("Failed to initialize Vendetta plugins"));
        initPlugins();
        updateFonts();
        logger.log("SChat is ready!");
      });
    }
  });

  // src/entry.ts
  init_asyncIteratorSymbol();
  init_promiseAllSettled();
  init_async_to_generator();
  var { instead: instead3 } = require_cjs();
  globalThis.window = globalThis;
  function initializeSChat() {
    return _initializeSChat.apply(this, arguments);
  }
  function _initializeSChat() {
    _initializeSChat = _async_to_generator(function* () {
      try {
        Object.freeze = Object.seal = Object;
        yield (init_caches(), __toCommonJS(caches_exports)).initMetroCache();
        yield (init_src(), __toCommonJS(src_exports)).default();
      } catch (e) {
        var { ClientInfoManager } = (init_modules(), __toCommonJS(modules_exports));
        var stack = e instanceof Error ? e.stack : void 0;
        console.log(stack ?? e?.toString?.() ?? e);
        alert([
          "Failed to load SChat!\n",
          `Build Number: ${ClientInfoManager.Build}`,
          `SChat: ${"f4c160c-main"}`,
          stack || e?.toString?.()
        ].join("\n"));
      }
    });
    return _initializeSChat.apply(this, arguments);
  }
  if (typeof globalThis.__r !== "undefined") {
    initializeSChat();
  } else {
    var onceIndexRequired = function(originalRequire) {
      var batchedBridge = window.__fbBatchedBridge;
      var callQueue = new Array();
      var unpatchHook = instead3("callFunctionReturnFlushedQueue", batchedBridge, (args, orig) => {
        if (args[0] === "AppRegistry" || !batchedBridge.getCallableModule(args[0])) {
          callQueue.push(args);
          return batchedBridge.flushedQueue();
        }
        return orig.apply(batchedBridge, args);
      });
      var startDiscord = /* @__PURE__ */ function() {
        var _ref = _async_to_generator(function* () {
          yield initializeSChat();
          unpatchHook();
          originalRequire(0);
          callQueue.forEach((arg) => batchedBridge.getCallableModule(arg[0]) && batchedBridge.__callFunction(...arg));
        });
        return function startDiscord2() {
          return _ref.apply(this, arguments);
        };
      }();
      startDiscord();
    };
    onceIndexRequired2 = onceIndexRequired;
    Object.defineProperties(globalThis, {
      __r: {
        configurable: true,
        get: () => _requireFunc,
        set(v2) {
          _requireFunc = function patchedRequire(a) {
            if (a === 0) {
              if (window.modules instanceof Map) {
                window.modules = Object.fromEntries([
                  ...window.modules
                ]);
              }
              onceIndexRequired(v2);
              _requireFunc = v2;
            } else
              return v2(a);
          };
        }
      },
      __d: {
        configurable: true,
        get() {
          if (window.Object && !window.modules) {
            window.modules = window.__c?.();
          }
          return this.value;
        },
        set(v2) {
          this.value = v2;
        }
      }
    });
  }
  var _requireFunc;
  var onceIndexRequired2;
})();
//# sourceURL=schat

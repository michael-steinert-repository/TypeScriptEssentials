var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var firstName = 'Michael';
var lastName = 'Steinert';
var getFullName = function (firstName, lastName) {
    return firstName + ' ' + lastName;
};
console.log("Full Name: ".concat(getFullName(firstName, lastName)));
/* Specific Class Types */
var userA = {
    firstName: 'Michael',
    lastName: 'Steinert',
    age: 27
};
var userB = {
    id: '1',
    firstName: 'Marie',
    lastName: 'Schmidt',
    age: 26,
    gender: 'w',
    getInformation: function () {
        return "".concat(this.firstName, " ").concat(this.lastName, " is ").concat(this.age, " old");
    }
};
var userC = {
    id: 2,
    firstName: 'Bruno',
    lastName: 'Armin',
    age: 24,
    getInformation: function () {
        return "".concat(this.firstName, " ").concat(this.lastName, " is ").concat(this.age, " old");
    }
};
console.log(userB.getInformation());
var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        User.userCount++;
    }
    User.prototype.getInformation = function () {
        return "".concat(this.firstName, " ").concat(this.lastName, " is ").concat(this.age, " old");
    };
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(firstName, lastName, age, isEditor) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.isEditor = isEditor;
        return _this;
    }
    Admin.prototype.setIsEditor = function (isEditor) {
        this.isEditor = isEditor;
    };
    Admin.prototype.getIsEditor = function () {
        return this.isEditor;
    };
    return Admin;
}(User));
var user = new User('Michael', 'Steinert', 27);
console.log(user.getInformation());
var admin = new Admin('Marie', 'Schmidt', 26, true);
console.log(admin.getInformation());
console.log("userCount: ".concat(User.userCount));
/* Generics */
var addIdToObject = function (object) {
    var id = Math.random().toString(4);
    return __assign(__assign({}, object), { id: id });
};
var userWithId = addIdToObject(user);
console.log(userWithId);
/* Union Operator (to combine Data Types) */
var pageName = 'One';
pageName = 1;
var errorMessage = null;
var userD = null;
var popularTags = ['block', 'chain'];
var maybePopularTags = null;
/* Any, never, void and unknown Type */
var vAny = 42;
var s1 = vAny;
var vUnknown = 42;
//let s2: string = vUnknown; //Does not work
var s2 = vUnknown;
var doSomethingA = function () {
    console.log('Return Void');
};
var doSomethingB = function () {
    while (true) {
        console.log('Never ending Function');
    }
};
var pageNumber = '1';
/* Explicit Type Cast */
// First convert the Data Type into unknown then into number
var numericPageNumber = pageName;
/* Enums */
var Gender;
(function (Gender) {
    Gender["M"] = "man";
    Gender["W"] = "woman";
})(Gender || (Gender = {}));
var woman = Gender.W;
console.log(Gender.M);
console.log(woman);
/* Records */
var ids = {
    40: 'a',
    41: 'b'
};
ids[42] = 'c';
console.log(ids[42] === 'c' ? true : false);

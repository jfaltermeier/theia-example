"use strict";
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleUpdaterFrontendContribution = exports.ElectronMenuUpdater = exports.SampleUpdaterClientImpl = exports.SampleUpdaterMenu = exports.SampleUpdaterCommands = void 0;
var electron_1 = require("electron");
var inversify_1 = require("inversify");
var os_1 = require("@theia/core/lib/common/os");
var browser_1 = require("@theia/core/lib/browser");
var common_1 = require("@theia/core/lib/common");
var electron_main_menu_factory_1 = require("@theia/core/lib/electron-browser/menu/electron-main-menu-factory");
var frontend_application_config_provider_1 = require("@theia/core/lib/browser/frontend-application-config-provider");
var sample_updater_1 = require("../../common/updater/sample-updater");
var SampleUpdaterCommands;
(function (SampleUpdaterCommands) {
    var category = 'Electron Updater Sample';
    SampleUpdaterCommands.CHECK_FOR_UPDATES = {
        id: 'electron-sample:check-for-updates',
        label: 'Check for Updates...',
        category: category
    };
    SampleUpdaterCommands.RESTART_TO_UPDATE = {
        id: 'electron-sample:restart-to-update',
        label: 'Restart to Update',
        category: category
    };
    // Mock
    SampleUpdaterCommands.MOCK_UPDATE_AVAILABLE = {
        id: 'electron-sample:mock-update-available',
        label: 'Mock - Available',
        category: category
    };
    SampleUpdaterCommands.MOCK_UPDATE_NOT_AVAILABLE = {
        id: 'electron-sample:mock-update-not-available',
        label: 'Mock - Not Available',
        category: category
    };
})(SampleUpdaterCommands = exports.SampleUpdaterCommands || (exports.SampleUpdaterCommands = {}));
var SampleUpdaterMenu;
(function (SampleUpdaterMenu) {
    SampleUpdaterMenu.MENU_PATH = __spread(browser_1.CommonMenus.FILE_SETTINGS_SUBMENU, ['3_settings_submenu_update']);
})(SampleUpdaterMenu = exports.SampleUpdaterMenu || (exports.SampleUpdaterMenu = {}));
var SampleUpdaterClientImpl = /** @class */ (function () {
    function SampleUpdaterClientImpl() {
        this.onReadyToInstallEmitter = new common_1.Emitter();
        this.onReadyToInstall = this.onReadyToInstallEmitter.event;
    }
    SampleUpdaterClientImpl.prototype.notifyReadyToInstall = function () {
        this.onReadyToInstallEmitter.fire();
    };
    SampleUpdaterClientImpl = __decorate([
        inversify_1.injectable()
    ], SampleUpdaterClientImpl);
    return SampleUpdaterClientImpl;
}());
exports.SampleUpdaterClientImpl = SampleUpdaterClientImpl;
// Dynamic menus aren't yet supported by electron: https://github.com/eclipse-theia/theia/issues/446
var ElectronMenuUpdater = /** @class */ (function () {
    function ElectronMenuUpdater() {
    }
    ElectronMenuUpdater.prototype.update = function () {
        this.setMenu();
    };
    ElectronMenuUpdater.prototype.setMenu = function (menu, electronWindow) {
        if (menu === void 0) { menu = this.factory.createMenuBar(); }
        if (electronWindow === void 0) { electronWindow = electron_1.remote.getCurrentWindow(); }
        if (os_1.isOSX) {
            electron_1.remote.Menu.setApplicationMenu(menu);
        }
        else {
            electronWindow.setMenu(menu);
        }
    };
    __decorate([
        inversify_1.inject(electron_main_menu_factory_1.ElectronMainMenuFactory),
        __metadata("design:type", electron_main_menu_factory_1.ElectronMainMenuFactory)
    ], ElectronMenuUpdater.prototype, "factory", void 0);
    ElectronMenuUpdater = __decorate([
        inversify_1.injectable()
    ], ElectronMenuUpdater);
    return ElectronMenuUpdater;
}());
exports.ElectronMenuUpdater = ElectronMenuUpdater;
var SampleUpdaterFrontendContribution = /** @class */ (function () {
    function SampleUpdaterFrontendContribution() {
        this.readyToUpdate = false;
    }
    SampleUpdaterFrontendContribution.prototype.init = function () {
        var _this = this;
        this.updaterClient.onReadyToInstall(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.readyToUpdate = true;
                this.menuUpdater.update();
                this.handleUpdatesAvailable();
                return [2 /*return*/];
            });
        }); });
    };
    SampleUpdaterFrontendContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(SampleUpdaterCommands.CHECK_FOR_UPDATES, {
            execute: function () { return __awaiter(_this, void 0, void 0, function () {
                var status, applicationName;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.updater.checkForUpdates()];
                        case 1:
                            status = (_a.sent()).status;
                            switch (status) {
                                case sample_updater_1.UpdateStatus.Available: {
                                    this.handleUpdatesAvailable();
                                    break;
                                }
                                case sample_updater_1.UpdateStatus.NotAvailable: {
                                    applicationName = frontend_application_config_provider_1.FrontendApplicationConfigProvider.get().applicationName;
                                    this.messageService.info("[Not Available]: You\u2019re all good. You\u2019ve got the latest version of " + applicationName + ".", { timeout: 3000 });
                                    break;
                                }
                                case sample_updater_1.UpdateStatus.InProgress: {
                                    this.messageService.warn('[Downloading]: Work in progress...', { timeout: 3000 });
                                    break;
                                }
                                default: throw new Error("Unexpected status: " + status);
                            }
                            return [2 /*return*/];
                    }
                });
            }); },
            isEnabled: function () { return !_this.readyToUpdate; },
            isVisible: function () { return !_this.readyToUpdate; }
        });
        registry.registerCommand(SampleUpdaterCommands.RESTART_TO_UPDATE, {
            execute: function () { return _this.updater.onRestartToUpdateRequested(); },
            isEnabled: function () { return _this.readyToUpdate; },
            isVisible: function () { return _this.readyToUpdate; }
        });
        registry.registerCommand(SampleUpdaterCommands.MOCK_UPDATE_AVAILABLE, {
            execute: function () { return _this.updater.setUpdateAvailable(true); }
        });
        registry.registerCommand(SampleUpdaterCommands.MOCK_UPDATE_NOT_AVAILABLE, {
            execute: function () { return _this.updater.setUpdateAvailable(false); }
        });
    };
    SampleUpdaterFrontendContribution.prototype.registerMenus = function (registry) {
        registry.registerMenuAction(SampleUpdaterMenu.MENU_PATH, {
            commandId: SampleUpdaterCommands.CHECK_FOR_UPDATES.id
        });
        registry.registerMenuAction(SampleUpdaterMenu.MENU_PATH, {
            commandId: SampleUpdaterCommands.RESTART_TO_UPDATE.id
        });
    };
    SampleUpdaterFrontendContribution.prototype.handleUpdatesAvailable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var answer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.messageService.info('[Available]: Found updates, do you want update now?', 'No', 'Yes')];
                    case 1:
                        answer = _a.sent();
                        if (answer === 'Yes') {
                            this.updater.onRestartToUpdateRequested();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(common_1.MessageService),
        __metadata("design:type", common_1.MessageService)
    ], SampleUpdaterFrontendContribution.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(ElectronMenuUpdater),
        __metadata("design:type", ElectronMenuUpdater)
    ], SampleUpdaterFrontendContribution.prototype, "menuUpdater", void 0);
    __decorate([
        inversify_1.inject(sample_updater_1.SampleUpdater),
        __metadata("design:type", Object)
    ], SampleUpdaterFrontendContribution.prototype, "updater", void 0);
    __decorate([
        inversify_1.inject(SampleUpdaterClientImpl),
        __metadata("design:type", SampleUpdaterClientImpl)
    ], SampleUpdaterFrontendContribution.prototype, "updaterClient", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SampleUpdaterFrontendContribution.prototype, "init", null);
    SampleUpdaterFrontendContribution = __decorate([
        inversify_1.injectable()
    ], SampleUpdaterFrontendContribution);
    return SampleUpdaterFrontendContribution;
}());
exports.SampleUpdaterFrontendContribution = SampleUpdaterFrontendContribution;
//# sourceMappingURL=sample-updater-frontend-contribution.js.map
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

import { ElectronMainApplication, ElectronMainApplicationContribution } from '@theia/core/lib/electron-main/electron-main-application';
import { SampleUpdater, SampleUpdaterClient } from '../../common/updater/sample-updater';

import { injectable } from 'inversify';

const {autoUpdater} = require("electron-updater");

autoUpdater.logger = require("electron-log")
autoUpdater.logger.transports.file.level = "info"





@injectable()
export class SampleUpdaterImpl implements SampleUpdater, ElectronMainApplicationContribution {

    protected clients: Array<SampleUpdaterClient> = [];


    constructor() {
        autoUpdater.autoDownload = false
        autoUpdater.on('update-available', () => {
            this.clients.forEach(c => c.updateAvailable(true))
        })
        autoUpdater.on('update-not-available', () => {
            this.clients.forEach(c => c.updateAvailable(false))
        })
    }

    checkForUpdates(): void {
        autoUpdater.checkForUpdates();
    }

    onRestartToUpdateRequested(): void {
        autoUpdater.quitAndInstall();  
    }

    downloadUpdate(): void {
        autoUpdater.downloadUpdate();
    }

    onStart(application: ElectronMainApplication): void {
        // Called when the contribution is starting. You can use both async and sync code from here.
        this.checkForUpdates();
    }

    onStop(application: ElectronMainApplication): void {
        // Invoked when the contribution is stopping. You can clean up things here. You are not allowed call async code from here.
    }

    setClient(client: SampleUpdaterClient | undefined): void {
        if (client) {
            this.clients.push(client);
        } 
    }

    disconnectClient(client: SampleUpdaterClient): void {
        const index = this.clients.indexOf(client);
        if (index !== -1) {
            this.clients.splice(index, 1);
        } 
    }

    dispose(): void {
        this.clients.forEach(this.disconnectClient.bind(this));
    }

}

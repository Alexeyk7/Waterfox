/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* global pref */

pref("datareporting.healthreport.infoURL", "");

// Health Report is enabled by default on all channels.
pref("datareporting.healthreport.uploadEnabled", false, locked);

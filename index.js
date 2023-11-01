// The following APIs and libraries are available at runtime:
// * @google-cloud/bigquery@6.0.1 as google.cloud.bigquery
// * aws-sdk@2.1079.0 as AWS
// * atob@2.1.2 as atob
// * btoa@1.2.1 as btoa
// * crypto as crypto
// * form-data@2.4.0 as FormData
// * oauth@0.9.15 as OAuth
// * xml@1.0.1 as xml
// * lodash@4.17.15 as _
// * node-fetch@2.6.0 as fetch

/**
 * @typedef {object} EventContext
 * @property {object} library - An object whose keys and values are strings
 * @property {object} page - An object whose keys are strings
 */

/**
 * @typedef {object} GroupEvent
 * @property {string} anonymousId - The anonymized device ID
 * @property {string=} userId - Optional, the ID of the user, if any
 * @property {string} groupId - The ID of the group
 * @property {EventContext} context - The event context
 * @property {string} messageId - The ID of the message
 * @property {object} traits - An object of traits whose keys are strings
 * @property {string} timestamp - Timestamp formatted as RFC 3339
 * @property {string} type - Will always be the string literal "group" in this case
 */

/**
 * @typedef {object} IdentifyEvent
 * @property {string} anonymousId - The anonymized device ID
 * @property {string=} userId - Optional, the ID of the user, if any
 * @property {EventContext} context - The event context
 * @property {string} messageId - The ID of the message
 * @property {object} traits - An object of traits whose keys are strings
 * @property {string} timestamp - Timestamp formatted as RFC 3339
 * @property {string} type - Will always be the string literal "identify" in this case
 */

/**
 * @typedef {object} PageEvent
 * @property {string} anonymousId - The anonymized device ID
 * @property {string=} userId - Optional, the ID of the user, if any
 * @property {object} properties - An object of properties whose keys are strings
 * @property {EventContext} context - The event context
 * @property {string} messageId - The ID of the message
 * @property {string} timestamp - Timestamp formatted as RFC 3339
 * @property {string} type - Will always be the string literal "page" in this case
 */

/**
 * @typedef {object} TrackEvent
 * @property {string} anonymousId - The anonymized device ID
 * @property {string=} userId - Optional, the ID of the user, if any
 * @property {string} event - The name of the event
 * @property {object} properties - An object of properties whose keys are strings
 * @property {EventContext} context - The event context
 * @property {string} messageId - The ID of the message
 * @property {string} timestamp - Timestamp formatted as RFC 3339
 * @property {string} type - Will always be the string literal "identify" in this case
 */

/**
 * Handle track event
 * @param {TrackEvent} event
 * @param {object} settings - An object of Lambda function settings whose keys are strings
 * @returns {Promise<void>}
 */
async function onTrack(event, settings) {
  // Learn more at https://documentation.freshpaint.io/developer-docs/freshpaint-sdk-reference#track

  // The code below serves as an example of how you might implement your Lambda function destination to forward the
  // event to a REST API. You can modify or replace this code below with your own implementation as needed.
  const endpoint = ''; // replace with your endpoint

  await fetch(endpoint, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(settings.apiKey + ':')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(event)
  });
}

/**
 * Handle identify event
 * @param {IdentifyEvent} event
 * @param {object} settings - An object of Lambda function settings whose keys are strings
 * @returns {Promise<void>}
 */
async function onIdentify(event, settings) {
  // Learn more at https://documentation.freshpaint.io/developer-docs/freshpaint-sdk-reference#identify
  throw new EventNotSupported('identify is not supported');
}

/**
 * Handle group event
 * @param {GroupEvent} event
 * @param {object} settings - An object of Lambda function settings whose keys are strings
 * @returns {Promise<void>}
 */
async function onGroup(event, settings) {
  // Learn more at https://documentation.freshpaint.io/developer-docs/freshpaint-sdk-reference#group
  throw new EventNotSupported('group is not supported');
}

/**
 * Handle page event
 * @param {PageEvent} event
 * @param {object} settings - An object of Lambda function settings whose keys are strings
 * @returns {Promise<void>}
 */
async function onPage(event, settings) {
  // Learn more at https://documentation.freshpaint.io/developer-docs/freshpaint-sdk-reference#page
  throw new EventNotSupported('page is not supported');
}

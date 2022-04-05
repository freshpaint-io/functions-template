// The following APIs and libraries are available at runtime:
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
 * Handle track event
 */
async function onTrack(event, settings) {
  // Learn more at https://documentation.freshpaint.io/developer-docs/freshpaint-sdk-reference#track
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
 */
async function onIdentify(event, settings) {
  // Learn more at https://documentation.freshpaint.io/developer-docs/freshpaint-sdk-reference#identify
  throw new EventNotSupported('identify is not supported');
}

/**
 * Handle group event
 */
async function onGroup(event, settings) {
  // Learn more at https://documentation.freshpaint.io/developer-docs/freshpaint-sdk-reference#group
  throw new EventNotSupported('group is not supported');
}

/**
 * Handle page event
 */
async function onPage(event, settings) {
  // Learn more at https://documentation.freshpaint.io/developer-docs/freshpaint-sdk-reference#page
  throw new EventNotSupported('page is not supported');
}

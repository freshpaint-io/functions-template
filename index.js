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

[![Build Status](https://travis-ci.com/shikimori/shiki-utils.svg?branch=master)](https://travis-ci.com/shikimori/shiki-utils)

# shiki-utils
Different tools used in [shikimori](https://github.com/shikimori/shikimori) and in [shiki-editor](https://github.com/shikimori/shiki-editor).

### `flash` based on [toastify-js](https://github.com/apvarun/toastify-js)
Provides helpers to show flash messages. 

```javascript
import { flash } from 'shiki-utils'
// or to import with tree shaking use
// import { flash } from 'shiki-utils/src/flash';

flash.info('flash.info');
flash.error('flash.error');
flash.notice('flash.notice');
```

```scss
@import './node_modules/shiki-utils/flash.sass';
```


### `mobileDetect` based on [ismobilejs](https://github.com/kaimallea/isMobile).
Provides detectors of phone, tablet or mobile (combined phone or tablet).

```javascript
import { mobileDetect, isTablet, isPhone, isMobile } from 'shiki-utils';
// or to import with tree shaking use
// import { mobileDetect, isTablet, isPhone, isMobile } from 'shiki-utils/src/mobile_detect';
```


### `RequestId`
Provides requests counter to avoid handling of irrelevant requests

```javascript
import { RequestId } from 'shiki-utils';
// or to import with tree shaking use
// import RequestId from 'shiki-utils/src/request_id';

class Autocomplete {
  fetch() {
    const requestId = new RequestId('autocomplete_users');
    const { data } = await fetch(...);

    if (requestId.isCurrent) {
      // handle data
    }
  }
}
```


### `ShikiRequest`
Provides api to some of shikimori resources .

It uses [axios](https://github.com/axios/axios) to perform ajax requests.

```javascript
import { ShikiRequest } from 'shiki-utils';
// or to import with tree shaking use
// import ShikiRequest from 'shiki-utils/src/shiki_request';

import axios from 'axios';

const origin = 'https://shikimori.one';
const shikiRequest = new ShikiRequest(origin, axios)

cosnt reuslt = await shikiRequest.autocomplete('user', 'z');
```

####
Package release command
```sh
GITHUB_TOKEN=... npm run release
```

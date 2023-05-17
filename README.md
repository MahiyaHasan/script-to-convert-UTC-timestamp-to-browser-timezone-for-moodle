If moodle is integrated within an iframe to your website, and users from different timezones don't have access to set their own timezone, you may set the default location setting to UTC, and use this script to convert to users own timezone.

This script will convert the timestamp to user timezone comparing the timezone of browser and the difference(time offset) with UTC.
The attribute "timestamp-utc" used here is the attribute where your timestamp stored in database will be saved.

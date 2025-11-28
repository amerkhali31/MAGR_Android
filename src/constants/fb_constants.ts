// src/constants/fb_constants.ts

// src/constants/fb_constants.ts

/**
 * Firestore Constants
 * Structure:
 * COLLECTION -> DOCUMENTS -> FIELDS
 */

export const DAILY_TIMES = {
  COLLECTION: "todays_prayer_times",
  DOCUMENTS: {
    DAILY_PRAYER_TIMES: {
      NAME: "daily_prayer_times",
      FIELDS: {
        FAJR_ADHAN: "fajr_adhan",
        FAJR_IQAMA: "fajr_iqama",
        DHUHR_ADHAN: "dhuhr_adhan",
        DHUHR_IQAMA: "dhuhr_iqama",
        ASR_ADHAN: "asr_adhan",
        ASR_IQAMA: "asr_iqama",
        MAGHRIB_ADHAN: "maghrib_adhan",
        MAGHRIB_IQAMA: "maghrib_iqama",
        ISHA_ADHAN: "isha_adhan",
        ISHA_IQAMA: "isha_iqama",
        JUMAA_ADHAN: "jumaa_adhan",
        JUMAA_IQAMA: "jumaa_iqama",
        UPDATED_AT: "updated_at", // optional example field
      },
    },
  },
};

export const ANNOUNCEMENTS = {
	COLLECTION: "announcements",
	DOCUMENTS: {
		ANNOUNCEMENTS: {
			NAME: "announcements",
			FIELDS: {
				URLS: "urls"
			}
		}

	}
};
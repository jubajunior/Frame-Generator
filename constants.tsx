
import React from 'react';

export const COLORS = {
  primary: '#004d26', // Organization Green
  secondary: '#ff0000', // Organization Red
  accent: '#ffffff',
  bg: '#f8fafc',
  text: '#1a1a1a',
};

/**
 * URLs for the designed frames with transparency.
 * We use the user's provided high-quality frame URL.
 * Updated to s4000 for 4K resolution support.
 */
export const FRAME_OVERLAY_URL = `https://lh3.googleusercontent.com/pw/AP1GczOfk60hxcefa74GSVvjbtQyVGywOf8Fx4XrC33qR6aQqG0PDak_5nBflVLOpVrhsdCeyw0WinEbjDkqLFprER4LBxOovNenDVmI-LWhkK80fgTYkZMvKsoyTxhHvYjIdk6nEEA4EQoZ5lI8ARZ5_BXO2YOXHyqOEEuK9W3TuNoVfhSP9gU4KL9af08FUJeNuikIbPS6BQEkcLU1JcP5FZ4cyLWhd4UTh94bAsfrsCAPAhmxQ1IYOPjolcZcBYb9F2sEptpejbWgz8L_f6K6CIVKX24G3-1Dbxo9eOK5V4nBvDU2DkAwMDt3ExcqvPeNaPi02otqVfV1cVNl_S2yA_PQRSlLFLzJ8Q16sgvk7-SqlESbCqvAcpcc9y-dXOikQYAotORH7HzB6XHxjq3ZyoUtEbMyVeghSj-jjt1cVv7Ucp-TOe31M_9mSh05aQtUsPd6z7r0g_zQ8PbICQgeJrEM9czHtMAYKX1m3MWenH0TBZKyxClJnLji-M0JA8KS4V2ueCWQQ7n8sNbIMHNYrgjblyhbW4Ln1xhK9il_L7pu8e_xLhrOWxCtM6LHmbh-eGJ98mLkpqfg97RN0eDVjxp0BsG_eS-PQ2sCJ3DlOjgwB27RlEVbZmi6HN3hpbIUdthgzOS-Aen_ZbN9_ZNrICxyS4NiWTttWBLTFbKhnNWPF_tSVhuba-XPglZkLIcc_P5J_KFTmdAyCZKbnioC0gvgNJCaX457_ZKkXZD83k8uC0PwY0r4-L_DD3Hm60z4d02st1_pGKfbJiV2uUE31zfhJf9HTozY7GJTQQpvLD87nDurxPIYoh3GwhZQAFln8uhFBfnkTT6xOuGE9GYAC2Eo40BnzlMxOL1dcDDPfo8koV03yQADUbvuA7o4TeDwlQ51ipG4QDJSDbG6CacBLrZY2K5gRa0i3EYh5U_HlMj7eJyjIuRlNFGL4yo-M78OmtSXhUifXbqb0rXvuXRMAlEKkBrRCJsQUA79-mmDejZvbMUKE3wmqF5fTFrmm_orX6BZpBuyiKRDv83NOTnt-cO5iDPxy6DqXnyGAqWrOH99cgF2V0hP=s4000-no?authuser=0`;

// Default greeting card frame
export const GREETING_CARD_FRAME_URL = `https://lh3.googleusercontent.com/pw/AP1GczMNUJqnPyzHIKv4jAklnJbblYOMUCjR2NRKP5_aZbSbulkK6B8sAKK0mQdUk7zcoxwc-58SMd4-sgt0o-yDN0Bnxti-mMJiXSRh3L3OtSnPilq7bXdcMrtpkWNqY_QT7x600bXlAqbJPBmFgLyB4ib0nDiSsGJY6qHIiWaXyX22Ufsq8Mdu62tTlUb178j6OEMuZszQnORMysM8Sp6SOYnbdkj5jPF6yy3t6C4oNd-0bgkOhz8VYSiawLSYph9orJIb-8RuReJODotfmJ0_GXfAFIzXEDhUr_ffdjmKpOAzw9ycKsoJ-dMLOJlCImzLIO7BjbF3zOJpgnJ89Rg1k4QrpFW037hlwWZqYFtfbRiW4Oqd-QaeIrM1S8Ypn7BZcN6_0KZg2ZYGOc0iAVYyF6ZxMRqdKbYPkBas7jaxoTVIlNw27qX3MhPr21rcjwmasnKV-To87n97Mca0SqClcEDqIkyoFcBwZyR93RUqFFPU8iIx7hKao7HBk9EOQoYKLy00sjQqWPVYaNMqkqAnq-iI-sF2iCz-mYL_79Mn3klAs8LFR7UIxKdCfD4uKFfiFb6tCZMhvQQwMvs27SPlo-skSaQW3_cs7R7wPLFF_j57G5B28DoRr8_SUAb0R_f4LAt3jsXNQeEK_E8oxenrmDFuh-NTwCOuzch4_ch5zwTW3qDY9JaXxzO0skR_WOYtbRcIyLSXeX3IO8aCcFlL0uIDLcJlNYCluuqfYFwj2hj5PwVxmwEbngorGxEqD8iuO5e_4GnDuSZgINY4MzKWzVT509Hsep7N8C2GHEChakpAv7rpNxodP5S1NRqrIG1zPJ_YlwE17FaK__43EHveKrgqwMSi7MwqzJcErwn9TRXA9Fc3a_GxWDc3s5kDnIYnHcEBGC8lIWzF9-GkjyEpQByGiriu0t_Y39UH8it9_KbpE2ZOALFbudTirx3isI2AD4yZjd_LVEoGf-oq2gr6bUtZtuGvLl4CVLp4EpAF_PFj3Pysh3_aCaM5ErROVzKCDgkgdVn-rBVblNLuNjyaapaHDcrm1q6TjGqDjpEMYVJ7tqHcbvyK=s4000-no?authuser=0`;

export const BENGALI_TEXT = {
  title: `বাংলাদেশ ইসলামী ছাত্র মজলিস`,
  subtitlePart1: `৩৬ তম প্রতিষ্ঠা বার্ষিকীর`,
  subtitlePart2: `শুভেচ্ছা!`,
  tagline: `জ্ঞান অর্জন, চরিত্র গঠন ও ইসলামী সমাজ বিপ্লবের কাফেলা।`,
  anniversaryInfo: `দেশের জনপ্রিয় ছাত্র সংগঠন বাংলাদেশ ইসলামী ছাত্র মজলিস এর ৩৬ তম প্রতিষ্ঠাবার্ষিকী ৫ জানুয়ারি ২০২৬ । এই আনন্দঘন সময়ের সবাইকে জানাই আন্তরিক শুভেচ্ছা।`,
  anniversaryGreeting: `৩৬ তম প্রতিষ্ঠা বার্ষিকীর শুভেচ্ছা!`,
  stepsTitle: `আপনিও এই আনন্দে অংশ নিতে পারেন:`,
  steps: [
    `প্রথমে একটি সুন্দর ছবি আপলোড করুন।`,
    `ছবিটি আপনার ফেসবুক প্রোফাইলে ব্যবহারের জন্য ডাউনলোড করুন।`,
    `আপনার নাম ও শুভেচ্ছাবার্তা যুক্ত করে আবার ছবিটি ডাউনলোড করুন।`,
    `প্রস্তুতকৃত ছবিটি প্রোফাইলে দিন এবং শুভেচ্ছা বার্তাসহ টাইমলাইনে পোস্ট করুন।`
  ],
  giftInfo: `এই ক্যাম্পেই থেকে ভাগ্যবান অংশগ্রহণকারীরা পেতে পারেন আকর্ষণীয় উপহার।`,
  hashtags: `পোস্ট করার সময় অবশ্যই ব্যবহার করুন হ্যাশট্যাগ: #ছাত্রমজলিস36 অথবা #ChhatraMajlis36`,
  instructions: `আপনার প্রোফাইল ছবির জন্য নিচের ফ্রেমটি ব্যবহার করুন অথবা শুভেচ্ছা কার্ড তৈরি করুন।`,
  frameLabel: `প্রোফাইল ফ্রেম জেনারেটর`,
  greetingLabel: `শুভেচ্ছা কার্ড তৈরি করুন`,
  nameInputPlaceholder: `আপনার নাম লিখুন`,
  messageInputPlaceholder: `আপনার বার্তা লিখুন (বাংলায়)`,
  uploadBtn: `আপনার ছবি দিন`,
  downloadBtn: `ডাউনলোড করুন`,
  shareBtn: `শেয়ার করুন`,
  footerText: `© ২০২৫ বাংলাদেশ ইসলামী ছাত্র মজলিস — সকল স্বত্ত্ব সংরক্ষিত।`,
  editor: `প্রচার ও প্রকাশনা বিভাগ`,
  address: `কেন্দ্রীয় কার্যালয়: ঢাকা, বাংলাদেশ।`,
  campaignInfo: `আপনার ছবি আপলোড করে ফ্রেমটি ডাউনলোড করুন এবং আপনার প্রোফাইল হিসেবে সেট করুন।`
};

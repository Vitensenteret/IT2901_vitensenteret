// based on https://scotch.io/tutorials/simple-language-translation-in-angular-2-part-1

export const LANG_EN_NAME = 'en';

export const LANG_EN_TRANS = {
  // Application
  'Vitensenteret - AdminPortal': 'Vitensenteret - AdminPortal',
  'Vitensenteret - Survey': 'Vitensenteret - Survey',

  // Generic
  'Edit': 'Edit',
  'Create': 'Create',
  'Survey': 'Survey',
  'survey': 'survey',
  'Title': 'Title',
  'Questions': 'Questions',
  'Question': 'Question',
  'Delete': 'Delete',
  'Submit': 'Submit',
  'Alternative': 'Alternative',
  'Cancel': 'Cancel',
  'Save': 'Save',
  'Settings': 'Settings',
  'Log out': 'Log out',
  'Search': 'Search',
  'Email': 'Email',
  'Password': 'Password',
  'User ID': 'User ID',
  'Role': 'Role',
  'Language': 'Language',
  'Copy': 'Copy',
  'CopyLabel': 'Copy',
  'Okay': 'Okay',
  'Success': 'Success',
  'Download': 'Download',
  'Active': 'Active',
  'Inactive': 'Inactive',
  'Option': 'Option',
  'Percentage': 'Percentage',
  'Responses': 'Responses',
  'User': 'User',
  'Nickname': 'Nickname',
  'Code': 'Code',

  // roles
  'admin': 'Superadmin',
  'member': 'Admin',

  // Permissions
  'You do not have the required permissions for this action!': 'You do not have the required permissions for this action!',

  // Languages
  'Norwegian': 'Norwegian',
  'English': 'English',

  // Forms
  'This field is required.': 'This field is required.',
  'This field is a duplicate.': 'This field is a duplicate.',
  'Bad format': 'Bad format',

  // Survey Question modes
  'binary': 'Yes/No',
  'star': '5 Stars',
  'single': 'Single Choice',
  'multi': 'Multiple Choice',
  'smiley': 'Smiley',
  'text': 'Free Text',

  // Image URL in create survey
  'This field is OPTIONAL. The field takes a full URL. Example: https://www.myWebsite.com/myImage.png. www.imgur.com is an image hosting service you can use.':
    'This field is OPTIONAL. The field takes a full URL. Example: https://www.myWebsite.com/myImage.png. www.imgur.com is an image hosting service you can use.',

  // Survey Pre post labels
  'Pre': 'Pre',
  'Post': 'Post',

  // Survey response numbers
  'Number of responses: n': 'Number of responses: %0',
  'Number of responses: n, m': 'Number of responses: %0, %1',

  // Dynamic loading controls
  'Load more': 'Load more',

  // Survey Question mode labels
  'Yes': 'Yes',
  'No': 'No',
  '1 Star': '1 Star',
  '2 Stars': '2 Stars',
  '3 Stars': '3 Stars',
  '4 Stars': '4 Stars',
  '5 Stars': '5 Stars',
  'Sad': 'Sad',
  'Neutral': 'Neutral',
  'Happy': 'Happy',

  // Admin outlet component
  'Admin Home': 'Admin Home',
  'Create New Survey': 'Create New Survey',
  'Select a survey from the left side menu': 'Select a survey from the left side menu',
  'Did not answer': 'Did not answer',

  // Create survey component
  'Survey options': 'Survey options',
  'Fill in every field marked as required': 'Fill in every field marked as required',
  'Admin-only Comment': 'Admin-only Comment',
  'Active status': 'Active status',
  'Enable English for this survey?': 'Enable English for this survey?',
  'Final message': 'Final message',
  'The final text to be displayed as a user completes a survey': 'The final text to be displayed as a user completes a survey',
  'Message (Norwegian)': 'Message (Norwegian)',
  'Message (English)': 'Message (English)',
  'No alternatives need to be set.': 'No alternatives need to be set.',
  'Question (Norwegian)': 'Question (Norwegian)',
  'Question (English)': 'Question (English)',
  'Alternatives: n/m': 'Alternatives: %0/%1',
  'Set Alternatives': 'Set Alternatives',
  'Add a question': 'Add a question',
  'Image URL (not requrired)': 'Image URL (not required)',
  'At least two alternatives must be set, with a maximum of 6.': 'At least two alternatives must be set, with a maximum of 6.',
  'Deletes this particular question! Careful!': 'Deletes this particular question! Careful!',
  'Several fields are required. Verify that you have filled out all required fields.':
    'Several fields are required. Verify that you have filled out all required fields.',
  'Add Option': 'Add Option',
  'Post results': 'Post results',
  'Could not post your survey. Error:': 'Could not post your survey. The server replied:',
  'The system cannot proceed until the issue has been resolved.': 'The system cannot proceed until the issue has been resolved.',
  'Required question': 'Required question',

  // All surveys component
  'n total surveys. A maximum of m items are displayed.': '%0 total surveys. A maximum of %1 items are displayed.',
  'Filter results on title and / or admin comment': 'Filter results on title and / or admin comment',

  // Login component
  'Login': 'Login',
  'Log in': 'Log in',
  'Email and password are required': 'Email and password are required',
  'Email or password is incorrect': 'Email or password is incorrect',
  'There was an issue connecting to the server': 'There was an issue connecting to the server',

  // New user component
  'You need to write the same pasword twice': 'You need to write the same pasword twice',
  'Register New User': 'Register New User',
  'Could not register account': 'Could not register account',
  'This field is invalid.': 'This field is invalid.',

  // Admin homepage component
  'Download as PDF': 'Download as PDF',
  'Download Raw Data': 'Download Raw Data',
  'Download as JSON': 'Download as JSON',
  'No responses have been registered, so there is nothing to show here yet.':
    'No responses have been registered, so there is nothing to show here yet.',
  'Create post-survey': 'Create post-survey',
  'Edit post-survey': 'Edit post-survey',
  'Copy with responses': 'Copy with responses',
    'Survey deleted': 'Survey deleted',
    'Are you sure you want to delete this survey?': 'Are you sure you want to delete this survey?',
    'The survey will be deleted! This action is permanent!': 'The survey will be deleted! This action is permanent!',
    'Go to survey': 'Go to survey',
    'Go to post survey': 'Go to post survey',
    'The survey is not active': 'The survey is not active',

  // Admin settings component
  'Retype password': 'Retype password',
  'Minimum 4 characters': 'Minimum 4 characters',
  'Minimum 4 numbers': 'Minimum 4 numbers',
  'Password changed': 'Password changed',
  'Admin settings': 'Admin settings',
  'Change password': 'Change password',
  'Change email': 'Change email',
  'User settings': 'User settings',
  'Superadmin settings': 'Superadmin settings',
  'Refer admin': 'Refer admin',
  'Refer member': 'Refer member',
  'You need to write the same password twice': 'You need to write the same password twice',
  'Delete account': 'Delete account',
  'Change the preferred language here': 'Change the preferred language here',
  'Could not change your email': 'Could not change your email',
  'Could not change your password': 'Could not change your password',
  'Can\'t delete this user': 'Can\'t delete this user',
  'User has been deleted': 'User has been deleted',
  'Can\'t delete current user': 'Can\'t delete current user',
  'Are you sure you want to delete this account?': 'Are you sure you want to delete this account?',
  'The account will be deleted! This action is permanent!': 'The account will be deleted! This action is permanent!',
  'Refer a userType': 'Refer a %0',
  'A referral link is only active for two weeks': 'A referral link is only active for two weeks',
  'You have now changed your email': 'You have now changed your email',
  'You have now changed your password': 'You have now changed your password',
  'You will now be logged out': 'You will now be logged out',
  'Referral link': 'Referral link',
  'Code to exit survey': 'Code to exit survey',

  // survey retrieval chart component
  'Download as PNG': 'Download as PNG',

  // survey retrieval component
  'Text based question. Download raw data to extract this.': 'Text based question. Download raw data to extract this.',

  // Chart types
  'Bar': 'Bar chart',
  'Doughnut': 'Doughnut chart',
  'Pie': 'Pie chart',
  'Line': 'Line chart',
  'PolarArea': 'PolarArea chart',

  // choose-survey component
  'All Surveys': 'All Surveys',
  'Search results for search': 'Search results for %0:',
  'Start': 'Start',
  'Start POST': 'Start POST',
  'Start survey': 'Start survey',

  // PDF download lines
  'Date created: d': 'Date created: %0',
  'Date printed: d': 'Date printed: %0',
  'Figure: n': 'Figure: %0',
  'Table: n': 'Table: %0',

  // Nickname component
  'Name': 'What is your name?',
  'You need to answer the pre survey first': 'You need to answer the pre survey first',
    'This nickname is taken, choose another one': 'This nickname is taken, choose another one',

  // Modal dialog in active survey
  'Sorry': 'Sorry',
  'ContactError': 'Something went wrong! Please contact the staff.',

  // quit survey prompt
  'Enter the code to quit': 'Enter the code to quit',
  'Incorrect code': 'Incorrect code',

  // play-survey - Free text
  'Max 255 characters': 'Max 255 characters',
  'Your answer': 'Your answer',

    // Footer
    'Group n': 'Group %0',
    'IT2901 - Informatics Project II': 'IT2901 - Informatics Project II',
};

// based on https://scotch.io/tutorials/simple-language-translation-in-angular-2-part-1

export const LANG_NO_NAME = 'no';

export const LANG_NO_TRANS = {
  // Generic
  'Edit': 'Endre',
  'Create': 'Lag',
  'Survey': 'Undersøkelse',
  'survey': 'undersøkelse',
  'Title': 'Navn',
  'Questions': 'Spørsmål',
  'Question': 'Spørsmål',
  'Delete': 'Slett',
  'Submit': 'Lagre',
  'Alternative': 'Alternativ',
  'Cancel': 'Avbryt',
  'Save': 'Lagre',
  'Settings': 'Instillinger',
  'Log out': 'Logg ut',
  'Search': 'Søk',
  'Email': 'Epost',
  'Password': 'Passord',
  'User ID': 'BrukerID',
  'Role': 'Kontotype',
  'Language': 'Språk',
  'Copy': 'Kopier',
  'Okay': 'Ok',
  'Success': 'Suksess',

  // Roles
  'admin': 'Superadmin',
  'member': 'Adminbruker',

  // Languages
  'Norwegian': 'Norsk',
  'English': 'Engelsk',

  // Forms
  'This field is required.': 'Dette feltet er påkrevd.',

  // Survey Question modes
  'Yes/No': 'Ja/Nei',
  '5 Stars': '5 stjerner',
  'Multiple Choice': 'Flervalgs',
  'Smiley': 'Smiley',
  'Free Text': 'Tekst',

  // Survey Question mode labels
  'Yes': 'Yes',
  'No': 'No',
  '1 Star': '1 Stjerne',
  '2 Stars': '2 Stjerner',
  '3 Stars': '3 Stjerner',
  '4 Stars': '4 Stjerner',
  // '5 Stars': '5 Stars', already defined above.
  'Sad': 'Trist',
  'Neutral': 'Nøytral',
  'Happy': 'Glad',

  // Admin outlet component
  'Admin Home': 'Administrator Hjem',
  'Create New Survey': 'Lag ny undersøkelse',

  // Create survey component
  'Survey options': 'Innstillinger for undersøkelse',
  'Fill in every field marked as required': 'Fyll inn alle påkrevde felt',
  'Admin-only Comment': 'Kommentar for administratorer',
  'Active status': 'Skal undersøkelsen være tilgjengelig for besøkende?',
  'Enable English for this survey?': 'Skal undersøkelsen også ha med engelske spørsmål?',
  'Final message': 'Takkskjerm',
  'The final text to be displayed as a user completes a survey': 'Fyll inn beskjeden som gis til brukere når de fullfører undersøkelsen',
  'Message (Norwegian)': 'beskjed (Norsk)',
  'Message (English)': 'beskjed (Engelsk)',
  'No alternatives need to be set.': 'Ingen alternativer er påkrevd.',
  'Question (Norwegian)': 'Spørsmål (Norsk)',
  'Question (English)': 'Spørsmål (Engelsk)',
  'Alternatives: n/m': 'Alternativer: %0/%1',
  'Set Alternatives': 'Sett alternativer',
  'Add a question': 'Legg til spørsmål',
  'At least two alternatives must be set, with a maximum of 6.':
    'Minst to av alternativene må være satt. Det kan settes opp til 6 alternativer.',
  'Deletes this particular question! Careful!': 'Forsiktig! Spørsmålet blir slettet!',
  'Several fields are required. Verify that you have filled out all required fields.':
    'Flere felt er påkrevd. Overse at alle de påkrevde er utfyllt.',
  'Add Option': 'Legg til et alternativ',
  'Post results': 'Resultat',
  'Could not post your survey. Error:': 'Kunne ikke lagre undersøkelsen. Feilmelding:',
  'The system cannot proceed until the issue has been resolved.': 'Systemet kan ikke fortsette før feilen har blitt rettet opp.',

  // All surveys component
  'n total surveys. A maximum of m items are displayed.': '%0 totalt antall undersøkelser. Maksimum %1 er vist samtidig.',
  'Filter results on title and / or admin comment': 'Filtrer listen etter tittel eller kommentar for administratorer',

  // Login component
  'Login': 'Innlogging',
  'Log in': 'Logg inn',
  'Email and password are required': 'Både epost og passord er påkrevd',
  'Email or password is incorrect': 'Epost eller passord er galt',

  // Admin homepage component
  'Download as PDF': 'Last ned som PDF',
  'Download Raw Data': 'Last ned rådata',

  // Admin settings component
  'Retype password': 'Skriv passordet igjen',
  'Minimum 4 characters': 'Minimum 4 tegn',
  'Admin settings': 'Admininstillinger',
  'Change password': 'Bytt passord',
  'Change email': 'Bytt epostkonto',
  'User settings': 'Brukerinstillinger',
  'Superadmin settings': 'Superadmin seksjon',
  'Request admin': 'Få invitasjonslink for superadmin',
  'Request member': 'Få invitasjonslink for adminbruker',
  'You need to write the same password twice': 'Du må skrive passordet to ganger',
  'Delete account': 'Slett kontoen',
  'Change the preferred language here': 'Bytt ditt foretrukne språk her',
  'Could not change your email': 'Kunne ikke endre din epostkonto',
  'Could not change your password': 'Kunne ikke endre passordet ditt',
  'Can\'t delete this user': 'Kan ikke slette denne brukeren',
  'User has been deleted': 'Brukeren har blitt slettet',
  'Can\'t delete current user': 'Kan ikke slette brukeren du er logget inn med',
  'Are you sure you want to delete this account?': 'Er du sikker på at du vil slette denne kontoen?',
  'The account will be deleted! This action is permanent!': 'Kontoen vil bli slettet! Dette er permanent!',
  'Refer one userType': 'Referer en %0',
  'A referral link is only active for two weeks': 'En invitasjonslink er kun gyldig i to uker',
  'You have now changed your email': 'Du har nå byttet epostkonto for brukeren din',
  'You have now changed your password': 'Du har nå byttet passord',
  'You will now be logged out': 'Du blir nå logget ut',
  'Referral link': 'Referral link',


  // new-user component
  'Could not register account': 'Kunne ikke registrere brukeren',
  // survey retrieval component
  'Text based question. Download raw data to extract this.': 'Tekstbasert spørsmål. Last ned rådataen for å se svarene.',

  // survey retrieval chart component
  'Download as PNG': 'Last ned som PNG',

    // choose-survey component
    'All Surveys': 'Alle undersøkelsene',
    'Search results for search': 'Søkeresultatene for %0:',


  // Chart types
  'Bar': 'Stolpediagram',
  'Doughnut': 'Smultringdiagram',
  'Pie': 'Sektordiagram',
  'Line': 'Linjediagram',
  'PolarArea': 'Rosediagram',


};

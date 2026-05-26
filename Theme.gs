
// ─── THEME CONFIG ────────────────────────────────────────
const THEME = {
  colors: {
    primary:   "#0171F8",  // blue  — main actions
    success:   "#15803D",  // green   — insert / confirm
    danger:    "#FE566B",  // red     — destructive actions
    neutral:   "#F0ECE5",  // grey    — secondary actions
    dark:      "#19213D",  // near black — headers
  },
  icons: {
    logo:      "https://res.cloudinary.com/dwbgkof9w/image/upload/v1779779929/findiy_wermnl.png",
    generate:  "https://fonts.gstatic.com/s/i/googlematerialicons/auto_awesome/v14/gm_blue-24dp/1x/gm_ico_auto_awesome_gm_blue_24dp.png",
    insert:    "https://fonts.gstatic.com/s/i/googlematerialicons/send/v14/gm_blue-24dp/1x/gm_ico_send_gm_blue_24dp.png",
    back:      "https://fonts.gstatic.com/s/i/googlematerialicons/arrow_back/v14/gm_blue-24dp/1x/gm_ico_arrow_back_gm_blue_24dp.png",
  },
  text: {
    appName:   "Draft Reply Generator",
    tagline:   "Powered by Findiy",
  }
};

// ─── REUSABLE BUTTON BUILDERS ────────────────────────────

function primaryButton(label, functionName, params) {
  const btn = CardService.newTextButton()
    .setText(label)
    .setBackgroundColor(THEME.colors.primary)
    .setOnClickAction(
      CardService.newAction()
        .setFunctionName(functionName)
        .setParameters(params || {})
    );
  return btn;
}

function successButton(label, functionName, params) {
  return CardService.newTextButton()
    .setText(label)
    .setBackgroundColor(THEME.colors.success)
    .setOnClickAction(
      CardService.newAction()
        .setFunctionName(functionName)
        .setParameters(params || {})
    );
}

function neutralButton(label, functionName, params) {
  return CardService.newTextButton()
    .setText(label)
    .setBackgroundColor(THEME.colors.neutral)
    .setOnClickAction(
      CardService.newAction()
        .setFunctionName(functionName)
        .setParameters(params || {})
    );
}

// ─── REUSABLE HEADER BUILDER ─────────────────────────────

function appHeader(subtitle) {
  return CardService.newCardHeader()
    .setTitle(THEME.text.appName)
    .setSubtitle(subtitle || THEME.text.tagline)
    .setImageUrl(THEME.icons.logo)
    .setImageStyle(CardService.ImageStyle.CIRCLE);
}

// ─── REUSABLE DIVIDER ────────────────────────────────────

function divider() {
  return CardService.newDivider();
}
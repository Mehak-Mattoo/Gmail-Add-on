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

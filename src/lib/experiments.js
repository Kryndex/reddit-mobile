export function extractUser(state) {
  if (!state || !state.user || !state.accounts) {
    return;
  }
  return state.accounts[state.user.name];
}

export function getExperimentData(state, experimentName) {
  const user = extractUser(state);
  const variant = user.features[experimentName] ?
        user.features[experimentName].variant :
        null; // this could happen if we are forcing the experiment via url.
  return { experimentName, variant };
}

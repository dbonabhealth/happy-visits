export const VISITS_LOADED = 'VISITS_LOADED';

export const loadVisitsAction = (visits) => (
  {
    type: VISITS_LOADED,
    state: {
        visits,
    },
  }
)

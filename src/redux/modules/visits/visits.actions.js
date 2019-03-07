export const VISITS_LOADED = 'VISITS_LOADED';
export const VISITS_LOAD_FAILED = 'VISITS_LOAD_FAILED';

export const loadVisitsAction = (visits) => (
  {
    type: VISITS_LOADED,
    state: {
        visits,
    },
  }
)

export const loadVisitsFailed = (error) => ({
  type: VISITS_LOAD_FAILED,
    state: {
        visits: [],
        error,
    },
})

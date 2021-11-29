export const SET_ERROR_ANIMALS = "SET_ERROR_ANIMALS";
export const SET_LOADING_ANIMALS = "SET_LOADING_ANIMALS";
export const SET_DATA_ANIMALS = "SET_DATA_ANIMALS";

export const setLoading = (status) => ({
    type: SET_LOADING_ANIMALS,
    payload: status
});

export const setError = (status) => ({
    type: SET_ERROR_ANIMALS,
    payload: status
});

export const setData = (todos) => ({
    type: SET_DATA_ANIMALS,
    payload: todos
});

const FACTS_API = "https://meowfacts.herokuapp.com/";
const IMAGE_API = "https://api.thecatapi.com/v1/images/search";

export const getRandomAnimals = async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setError(false));

    try {
        const response = await Promise.all([
          fetch(FACTS_API),
          fetch(IMAGE_API)
        ]);
        const [factsResult, imageResult] = await Promise.all(
          response.map((response) => response.json())
        );

        dispatch(setData({
            facts: factsResult.data[0],
            url: imageResult[0].url
        }));
    } catch (e) {
        console.error(e);
        dispatch(setError(true));
    }

    dispatch(setLoading(false));
};

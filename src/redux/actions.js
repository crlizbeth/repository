import axios from "axios";

export const fetchDataStart = () => ({
    type: "FETCH_DATA_START",
});

export const fetchDataSuccess = (data) => ({
    type: "FETCH_DATA_SUCCESS",
    payload: data,
});

export const fetchDataError = (error) => ({
    type: "FETCH_DATA_ERROR",
    payload: error,
});

export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataStart());

        axios
            .get("../sample/sample.json")
            .then((response) => {
                const filterData = response.data.entries
                    .filter((entry) => entry.programType === 'series')
                    .sort((a, b) => a.title.localeCompare(b.title));
                dispatch(fetchDataSuccess(filterData));
            })
            .catch((error) => {
                dispatch(fetchDataError(error.message));
            });
    };
};

export const paginate = (array, pageSize, pageNumber) => {
	return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};

export const pathName = window.location.pathname;

import { FcSearch } from 'react-icons/fc';

import { toast } from 'react-toastify';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    const searchQuery = evt.currentTarget.elements.query.value;
    console.log(searchQuery);
    if (searchQuery.trim() === '') {
      toast.error(
        'The search field cannot be empty. Please enter a search query.'
      );
      return;
    }
    onSubmit(searchQuery.trim());
    evt.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">
        <FcSearch />
      </button>
    </form>
  );
};

// const updateQueryString = evt => {
//     if (evt.target.value === '') return setSearchParams({});
//     setSearchParams({ film: evt.target.value });
//   };

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     if (searchMovie.trim() === '') {
//         toast.error(
//           'The search field cannot be empty. Please enter a search query.'
//         );
//         return;
//       }
//       onSubmit(searchMovie.trim());
//     //   setSearchParams({});
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={searchMovie} onChange={updateQueryString} />
//       <button type="submit">
//         <FcSearch />
//       </button>
//     </form>
//   );
// };

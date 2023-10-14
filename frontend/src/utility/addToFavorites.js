const addToFavorites = async (recipe, user, setLoggedInUser) => {
    try {
      const response = await fetch(
        `http://localhost:4000/user/add-to-favorites`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: user,
            _id: recipe._id,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      setLoggedInUser(data.user);
    } catch (error) {
      console.log(error);
    }
  };
  
  export default addToFavorites;
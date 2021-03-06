

export const getGif = async (category) => {
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=L9IGY80nH4qeJ1p2a9XfjHtTfvoPrT3B`;
    
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => { 
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });

    return gifs;
  };
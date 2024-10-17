import { Http } from '@nativescript/core';

const API_URL = 'https://gypsychristiannetwork.com/new/api/All_Records.json';

let cachedData = null;

async function fetchData() {
  if (cachedData) return cachedData;
  
  const response = await Http.getJSON(API_URL);
  cachedData = response.data;
  return cachedData;
}

export async function getArtists() {
  const data = await fetchData();
  const artists = [...new Set(data.map(track => track.Artist))];
  return artists.sort();
}

export async function getAlbumsByArtist(artist) {
  const data = await fetchData();
  const albums = data.filter(track => track.Artist === artist);
  const uniqueAlbums = [...new Set(albums.map(track => track.TrackAlbumName))];
  return uniqueAlbums.map(albumName => {
    const albumTrack = albums.find(track => track.TrackAlbumName === albumName);
    return {
      AlbumID: albumTrack.AlbumID,
      TrackAlbumName: albumName,
      ArtworkPath: albumTrack.ArtworkPath,
      Artist: artist
    };
  });
}

export async function getTracksByAlbum(albumId) {
  const data = await fetchData();
  return data.filter(track => track.AlbumID === albumId);
}
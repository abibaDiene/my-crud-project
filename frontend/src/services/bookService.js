import api from './authService';

export const bookService = {
  // Obtenir tous les livres
  getBooks: async (params = {}) => {
    try {
      const response = await api.get('/books/', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || { detail: 'Failed to fetch books' };
    }
  },

  // Obtenir un livre par ID
  getBook: async (id) => {
    try {
      const response = await api.get(`/books/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { detail: 'Failed to fetch book' };
    }
  },

  // Créer un nouveau livre
  createBook: async (bookData) => {
    try {
      const response = await api.post('/books/', bookData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { detail: 'Failed to create book' };
    }
  },

  // Mettre à jour un livre
  updateBook: async (id, bookData) => {
    try {
      const response = await api.put(`/books/${id}`, bookData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { detail: 'Failed to update book' };
    }
  },

  // Supprimer un livre
  deleteBook: async (id) => {
    try {
      const response = await api.delete(`/books/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { detail: 'Failed to delete book' };
    }
  },

  // Rechercher des livres
  searchBooks: async (query, params = {}) => {
    try {
      const response = await api.get('/books/', { 
        params: { ...params, search: query } 
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { detail: 'Failed to search books' };
    }
  }
};
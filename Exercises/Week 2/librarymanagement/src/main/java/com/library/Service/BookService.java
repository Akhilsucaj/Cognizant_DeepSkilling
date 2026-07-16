package com.library.Service;

import com.library.Repository.BookRepository;

public class BookService {

    private BookRepository repository;

    public void setRepository(BookRepository repository) {
        this.repository = repository;
    }

    public void displayService() {
        System.out.println("Book Service Created");
        repository.display();
    }

}
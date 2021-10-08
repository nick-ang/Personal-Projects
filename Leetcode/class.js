@com.fasterxml.jackson.annotation.JsonPropertyOrder({"id", "title"})
class Book {
  private int id;
  private String title;

  Book(int id, String title) {
    this.id = id;
    this.title = title;
  }

  @com.fasterxml.jackson.annotation.JsonGetter
  public int getId() {
      return this.id;
  }

  @com.fasterxml.jackson.annotation.JsonGetter
  public String getTitle() {
      return this.title;
  }
}

class BookManager {
  private List<Book> books;

  BookManager() {
    this.books = new ArrayList<>();
  }

  boolean createBook(int id, String title) {
    // TODO: return false if the book id already exists
     Book booktest = findBookById(id);
    if (booktest!= null) {
     return false;
    } else {
            Book book = new Book(id, title);
    books.add(book);
    return true;
    }

  }

  boolean updateBook(int id, String title) {
    // TODO: return false if the book id does not exist

        Book booktest = findBookById(id);

    if (booktest == null) {
        return false;
    } else {

    Book book = findBookById(id);
    if (book != null) {
      book.title = title;
    }
    return true;
    }
  }

  boolean deleteBook(int id) {
    // TODO: return false if the book does not exist
    Book booktest = findBookById(id);

    if (booktest == null) {
        return false;
    } else {

    Book book;
    for (int i = 0; i < books.size(); i++) {
      Book curBook = books.get(i);
      if (curBook.getId() == id) {
        book = curBook;
      }
    }
    book = null;
    return true;
    }
  }

  Book findBookById(int id) {
    // book or null
    for (int i = 0; i < books.size(); i++) {
      Book curBook = books.get(i);
      if (curBook.getId() == id) {
        return curBook;
      }
    }
    return null;
  }

  Book findBookByTitle(String title) {
    // book or null
    for (int i = 0; i < books.size(); i++) {
      Book curBook = books.get(i);
      if (curBook.getTitle().equals(title)) {
        return curBook;
      }
    }
    return null;
  }
}

// Do NOT edit the code below this comment.
// You should be able to complete this test without editing below this comment.

BookManager bookManager = new BookManager();

List<String> bookManagementRefactor(String[][] operations) {
  // Calls corresponding methods of bookManager based on the input
  List<String> answer = new ArrayList<>();
  com.fasterxml.jackson.databind.ObjectMapper mapper = new ObjectMapper();
  for (int i = 0; i < operations.length; i++) {
    try {
      String[] operation = operations[i];
      switch (operation[0]) {
        case "createBook": {
          int id = Integer.parseInt(operation[1]);
          answer.add(mapper.writeValueAsString(bookManager.createBook(id, operation[2])));
          break;
        }
        case "updateBook": {
          int id = Integer.parseInt(operation[1]);
          answer.add(mapper.writeValueAsString(bookManager.updateBook(id, operation[2])));
          break;
        }
        case "deleteBook": {
          int id = Integer.parseInt(operation[1]);
          answer.add(mapper.writeValueAsString(bookManager.deleteBook(id)));
          break;
        }
        case "findBookById": {
          int id = Integer.parseInt(operation[1]);
          Book book = bookManager.findBookById(id);
          answer.add(mapper.writeValueAsString(book));
          break;
        }
        case "findBookByTitle": {
          String title = operation[1];
          Book book = bookManager.findBookByTitle(title);
          answer.add(mapper.writeValueAsString(book));
          break;
        }
      }
    } catch (com.fasterxml.jackson.core.JsonProcessingException e) {
      System.out.println(e);
    }
  }
  return answer;
}



function mostFrequentDigits(a) {
  const result = [];
  const digitHash = {};
  // loop through and append to digitHash
  for (let i = 0; i < a.length; i++) {
    const digit = a[i].toString().split("");
    for (let j = 0; j < digit.length; j++) {
      if (digitHash[digit[j]]) {
        digitHash[digit[j]] += 1;
      } else {
        digitHash[digit[j]] = 1;
      }
    }
  }
  // push keys where count is max into result hash
  const arr = Object.values(digitHash);
  const max = Math.max(...arr);
  for (const key in digitHash) {
    if ((digitHash[key] == max)) {
      result.push(parseInt(key));
    }
  }
  return result;
}

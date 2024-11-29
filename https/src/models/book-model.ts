import { IBookCreateOrUpdate } from "../data/books.js";
import { connectionDb } from "../config/mysql-config.js";

export class Book {
  static addBook(book: IBookCreateOrUpdate): any {
    connectionDb.query(
      "INSERT INTO books (title, author) VALUES(?,?)",
      [book.title, book.author],
      (err, res: any) => {
        if (err) {
          throw new Error(err.message);
        } else {
          return res.insertId;
        }
      }
    );
  }

  static updateBook(id: number, book: IBookCreateOrUpdate): any {
    connectionDb.query(
      "UPDATE books SET title=?, author=? WHERE id=?",
      [book.title, book.author, id],
      (err, res: any) => {
        if (err) {
          throw new Error(err.message);
        } else {
          if (res.affectedRows > 0) {
            return true;
          }
        }
        return false;
      }
    );
  }
}

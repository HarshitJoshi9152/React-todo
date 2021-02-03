// https://www.npmjs.com/package/idb
// https://www.youtube.com/watch?v=vb7fkBeblcw

import {openDB} from "idb";

class DBManager {
	constructor(name = "Notes", store = "notes") {
		this.dbname = name
		this.storeName = store;
		this.db = null;

		if (!('indexedDB' in window)) {
			console.warn('IndexedDB not supported')
			throw new Error("IndexedDB not supported")
			// return
		}

		this._init_()
	}
	async _init_ () {
		this.db = await openDB(this.dbname, 1, {
			upgrade(upgradedDB, oldVersion, newVersion, transaction) {
				// if (!upgradedDB.objectStoreNames.contains(this.storeName)){
				// 	upgradedDB.createObjectStore(this.storeName);
				// }
			},
			// error case methods
			blocked() {
				console.log("there are older versions of the database open on the origin, so this version cannot open")
			},
			blocking() {
				console.log("this connection is blocking a future version of the database from opening.")
			},
			terminated() {
				console.log("the browser abnormally terminated the connection")
			},
		});
	}

	async getAllNotes() {
		return await this.db.transaction(this.storeName).objectStore(this.storeName).getAll()
	}

	addNote(note) {
		this.db.add(this.storeName, note);
	}

	isInitialised() {
		return !!this.db;
	}

	// should we delete the entire DB if the user logs out ? hmm
	// lets not hink about it unitl we implement loging in
}

export default DBManager;


/*
Article store
import { openDB } from 'idb/with-async-ittr.js';

async function demo() {
  const db = await openDB('Articles', 1, {
    upgrade(db) {
      // Create a store of objects
      const store = db.createObjectStore('articles', {
        // The 'id' property of the object will be the key.
        keyPath: 'id',
        // If it isn't explicitly set, create a value by auto incrementing.
        autoIncrement: true,
      });
      // Create an index on the 'date' property of the objects.
      store.createIndex('date', 'date');
    },
  });

  // Add an article:
  await db.add('articles', {
    title: 'Article 1',
    date: new Date('2019-01-01'),
    body: '…',
  });

  // Add multiple articles in one transaction:
  {
    const tx = db.transaction('articles', 'readwrite');
    await Promise.all([
      tx.store.add({
        title: 'Article 2',
        date: new Date('2019-01-01'),
        body: '…',
      }),
      tx.store.add({
        title: 'Article 3',
        date: new Date('2019-01-02'),
        body: '…',
      }),
      tx.done,
    ]);
  }

  // Get all the articles in date order:
  console.log(await db.getAllFromIndex('articles', 'date'));

  // Add 'And, happy new year!' to all articles on 2019-01-01:
  {
    const tx = db.transaction('articles', 'readwrite');
    const index = tx.store.index('date');

    for await (const cursor of index.iterate(new Date('2019-01-01'))) {
      const article = { ...cursor.value };
      article.body += ' And, happy new year!';
      cursor.update(article);
    }

    await tx.done;
  }
}

*/
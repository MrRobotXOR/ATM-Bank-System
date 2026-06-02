const db = require("./config/db");

async function test() {
  try {
    const connection = await db.getConnection();

    console.log("✅ DB Connected");

    connection.release();
  } catch (err) {
    console.log("❌ DB Error");
    console.log(err.message);
  }
}

test();
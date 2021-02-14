#!/bin/bash

# bash script to enter dummy info in the notes.json file

if [$1 = "exit"]
then
	echo "we need to exit"
	exit 0
fi

for i in {1..$1}
do
	echo -e "\t\t$i\n"
	unique=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
	#curl "http://localhost:2020/api/addNote" -d "{\"title\":\"title$i\",\"note\":\"unique random string: $unique\"}"
done

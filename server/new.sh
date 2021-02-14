#!/bin/bash

# bash script to enter dummy info in the notes.json file

max_no=20
int(){ printf '%d' ${1:-} 2>/dev/null || :; }

if [ $1 = "exit" ]
then
	exit 0
fi

# n=$(expr $1 + 0)
# if [ $n -gt $max_no ]
# then
# 	echo "arg value too great $n"
# 	exit 1
# fi

# not working he?
for i in { 1..$1 }
do
	echo -e "\t\t$i\n"
	# echo "new name$i"
	unique=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 32 | head -n 1)
	#curl "http://localhost:2020/api/addNote" -d "{\"title\":\"title$i\",\"note\":\"unique random string: $unique\"}"
done

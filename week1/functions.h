/* 
 * File:   functions.h
 * Author: john3367
 *
 * Created on February 25, 2014, 2:58 PM
 */

#ifndef FUNCTIONS_H
#define	FUNCTIONS_H

#include<string>
#include<vector>

#include <map>
using std::map;
using std::pair;
using std::string;
using std::vector;


long collatz(long n);

string pair_to_string(const pair<long, vector<long>> &p);

void fill_vector(map<long, vector<long>> &m, vector<long> &v, long start);





#endif	/* FUNCTIONS_H */


/**
 * 課題1: 数値が格納されている配列を引数で受け取り、一番大きい数値を削除した配列を返す関数を作成する
 *   - 関数名は「removeMaxNumberFromArray」とする
 *   - removeMaxNumberFromArray関数は次の1つの引数を持つ
 *     - 第1引数: 配列(引数名は_numbersとする)
 *   - 引数にわたす配列は事前に変数に格納する
 *     - 変数名は「numbers」とする
 *     - 「numbers」の内容は[10, 500, 234, 965, 221] とする
 *   - removeMaxNumberFromArray関数の戻り値は、第1引数で渡した配列の中から一番大きい数値を削除した新しい配列が返る
 *     - 戻り値は、「returnedNumbers」という変数に代入する
 *   - numbersとreturnedNumbersの中身をconsole.logで確認する。
 *   - 期待する結果
 *     - removeMaxNumberFromArray関数の戻り値は[10, 500, 234, 221]である
 *     - removeMaxNumberFromArray関数を実行した後の配列numbersの内容は [10, 500, 234, 965, 221] のままである
 */

const numbers = [10, 500, 234, 965, 221];
/* 
 function removeMaxNumberFromArray(_numbers) {
    const returnedNumbers = [];
    let maxNum = _numbers[0];
    for (let i = 1; i <_numbers.length; i++){ 
        if (_numbers[i] < maxNum) {
                returnedNumbers.push(_numbers[i]);
            } else {
                returnedNumbers.push(maxNum);
                maxNum = _numbers[i];
            }
    };
    return returnedNumbers;
 }

console.log('numbersの内容は[10, 500, 234, 965, 221]であるべき:', numbers );

console.log('returnedNumbersの内容は[10, 500, 234, 221]であるべき：', removeMaxNumberFromArray(numbers));

配列の順番が変わったので失敗

 */

function removeMaxNumberFromArray(_numbers) {
    const maxNum = Math.max.apply(null, _numbers); // Math.maxは配列を第1引数として渡せないので、applyを使うらしい
    const returnedNumbers = [];
    _numbers.forEach(function (num) {
        if (num !== maxNum) {
            returnedNumbers.push(num);
        }
    });
    return returnedNumbers;
}

console.log('numbersの内容は[10, 500, 234, 965, 221]であるべき:', numbers);

console.log('returnedNumbersの内容は[10, 500, 234, 221]であるべき：', removeMaxNumberFromArray(numbers));


/**
 * 課題2: 数値が格納されている配列を引数で受け取り、小さい順に並べ替える
 *   - 関数名は「sortNumbers」とする
 *   - sortNumbers関数は次の1つの引数を持つ
 *     - 第1引数: 配列(引数名は_numbersとする)
 *   - 引数にわたす配列は事前に変数に格納する
 *     - 変数名は「beforeSortNumbers」とする
 *     - 「beforeSortNumbers」の内容は [1000, 10, 500, 234, 965, 221, 102] とする
 *   - sortNumbers関数の戻り値は、第1引数で渡した配列内の数値を小さい順に並べた配列となる
 *     - 戻り値は、「afterSortNumbers」という変数に代入する
 *   - beforeSortNumbersとafterSortNumbersの中身をconsole.logで確認する。
 *   - 期待する結果
 *     - sortNumbers関数の戻り値は[10, 102, 221, 234, 500, 965, 1000]である
 *     - sortNumbers関数を実行した後のbeforeSortNumbersの内容は [1000, 10, 500, 234, 965, 221, 102] のままである
 *   - その他
 *     - 「Array.prototype.sort()」を使う *ソートされた配列は元の配列を並び替えるため注意
 *                                      *ソート基準を示さない場合、文字列比較で並び替えられる
 *       - https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */

const beforeSortNumbers = [1000, 10, 500, 234, 965, 221, 102];

function sortNumbers(_numbers) {
    const arrayForSort = _numbers.slice();
    const afterSortNumbers = arrayForSort.sort(function (a, b) {
        if (a < b) {
            return -1; // a が b より小さければ、a　は　b　の後ろに並ぶ
        } else if (a > b) {
            return 1;  // a が b より大きければ、a　は　b の前に並ぶ
        } else {
            return 0; // a と b が同じならば、a と b の並び順は変わらない
        }
    });
    return afterSortNumbers;
}

console.log('beforeSortNumbersの内容は[1000, 10, 500, 234, 965, 221, 102]であるべき：', beforeSortNumbers);
console.log('afterSortNumbersの内容は[10, 102, 221, 234, 500, 965, 1000]であるべき：' , sortNumbers(beforeSortNumbers));
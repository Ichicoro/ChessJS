public class genTable {
    public static void main(String[] args) {
        String str = "";
        str += "    <tbody>\n";
        for (int i=0;i<8;i++) {
            str += "        <tr>\n";
            for (int j=0; j<8; j++) {
                str += "            <td onclick=\"movePiece(" + i + "," + j + ")\" oncontextmenu=\"rcHandler(" + i + ", " + j + ", event)\"></td>\n";
            }
            str += "        </tr>\n";
        }
        str += "    </tbody>";
        System.out.println(str);
    }
}

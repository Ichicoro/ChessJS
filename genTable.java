public class genTable {
    public static void main(String[] args) {
        String str = "";
        str += "    <tbody>\n";
        for (int i=0;i<8;i++) {
            str += "        <tr>\n";
            for (int j=0; j<8; j++) {
                str += "            <th onclick=\"movePiece(" + i + "," + j + ")\" oncontextmenu=\"rcHandler(" + i + ", " + j + ", event)\"></th>\n";
            }
            str += "        </tr>\n";
        }
        str += "    </tbody>";
        System.out.println(str);
    }
}

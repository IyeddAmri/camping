import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, Padding, Border, FontFamily } from "../GlobalStyles";

const HomePage = () => {
  return (
    <View style={styles.homePage}>²
      <View style={styles.topAppBar}>
        <View style={[styles.topAppBar1, styles.topFlexBox]}>
          <View style={styles.barFlexBox} />
        </View>
        <Image
          style={styles.iconcontrolsVerticalAlt}
          contentFit="cover"
          source={require("../assets/money-motivation-t0tagwtx2q5w2kh6.jpg")}
          />
      </View>
      <View style={[styles.topSystembar, styles.topFlexBox]}>
        <View style={[styles.time, styles.barFlexBox]}>
          <Image
            style={styles.timeChild}
            contentFit="cover"
            source={require("../assets/money-motivation-t0tagwtx2q5w2kh6.jpg")}
          />
          <Text style={[styles.text, styles.textTypo]}>12:00</Text>
        </View>
        <View style={[styles.battery, styles.barFlexBox]}>
          <Image
            style={styles.batteryChild}
            contentFit="cover"
            source={require("../assets/money-motivation-t0tagwtx2q5w2kh6.jpg")}
          />
          <Image
            style={[styles.batteryItem, styles.unionIconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/money-motivation-t0tagwtx2q5w2kh6.jpg")}
          />
          <Image
            style={[styles.unionIcon, styles.unionIconSpaceBlock]}
            contentFit="cover"
            source={require("../assets/money-motivation-t0tagwtx2q5w2kh6.jpg")}
          />
        </View>
      </View>
      <View style={[styles.systemBar, styles.barFlexBox]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={[styles.button, styles.buttonSpaceBlock]}>
        <Text style={[styles.labelText, styles.sfSymbolFlexBox]}>
          ressources
        </Text>
      </View>
      <View style={[styles.button1, styles.buttonLayout]}>
        <Text style={[styles.labelText, styles.sfSymbolFlexBox]}>
          Astronomy
        </Text>
      </View>
      <View style={[styles.button2, styles.buttonLayout]}>
        <Text style={[styles.labelText, styles.sfSymbolFlexBox]}>Store</Text>
      </View>
      <View style={[styles.button3, styles.buttonSpaceBlock]}>
        <Text style={[styles.labelText, styles.sfSymbolFlexBox]}>
          Activities
        </Text>
      </View>
      <View style={[styles.button4, styles.buttonSpaceBlock]}>
        <Text style={[styles.labelText, styles.sfSymbolFlexBox]}>
          Emergency
        </Text>
      </View>
      <View style={styles.barsTabBarIconOnly}>
        <View
          style={[styles.partialsTabBarIconOnly, styles.partialsIconFlexBox]}
        >
          
        </View>
        
        <View
          style={[styles.partialsTabBarIconOnly, styles.partialsIconFlexBox]}
        >
          <View style={[styles.icon1, styles.iconPosition2]} />
          <Image
            style={[styles.iconmap, styles.iconmapPosition]}
            contentFit="cover"
            source={require("../assets/money-motivation-t0tagwtx2q5w2kh6.jpg")}
          />
          <View style={[styles.icon2, styles.barFlexBox]}>
            <Text style={[styles.sfSymbol, styles.sfSymbolFlexBox]}>􀈠</Text>
            
          </View>
        </View>
        <Image
          style={[styles.partialsTabBarIconOnly1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/money-motivation-t0tagwtx2q5w2kh6.jpg")}
          />
      </View>
      <View style={[styles.row, styles.rowLayout]}>
        <View style={styles.cardLayout}>
          <View style={styles.text1}>
            <Text style={[styles.store, styles.storeTypo]}>Store</Text>
          </View>
          <Image
            style={[styles.tlchargement2Icon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/money-motivation-t0tagwtx2q5w2kh6.jpg")}
          />
        </View>
        <View style={[styles.card1, styles.cardLayout]}>
          <View style={styles.text1}>
            <Text style={[styles.store, styles.storeTypo]}>Map</Text>
          </View>
          <Image
            style={[styles.tlchargement3Icon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/money-motivation-t0tagwtx2q5w2kh6.jpg")}
          />
        </View>
      </View>
      <View style={[styles.row1, styles.rowLayout]}>
        <View style={styles.cardLayout}>
          <View style={styles.text1}>
            <Text style={[styles.store, styles.storeTypo]}>Events</Text>
          </View>
          <Image
            style={[
              styles.kristsLuhaers582238UnsplashIcon,
              styles.iconPosition,
            ]}
            contentFit="cover"
            source={require("../assets/money-motivation-t0tagwtx2q5w2kh6.jpg")}
          />
        </View>
        <View style={[styles.card1, styles.cardLayout]}>
          <View style={styles.text1}>
            <View style={styles.interiorInspiration}>
              <Text style={[styles.bestPlaces, styles.storeTypo]}>
                Best Places
              </Text>
            </View>
          </View>
          <Image
            style={[styles.vieuxPortDeBizerte611Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/money-motivation-t0tagwtx2q5w2kh6.jpg")}
          />
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/money-motivation-t0tagwtx2q5w2kh6.jpg")}
          />
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  topFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: 360,
    position: "absolute",
  },
  barFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    color: Color.m3SysLightInverseSurface,
    fontWeight: "500",
    fontSize: FontSize.smallNormalRegular_size,
  },
  unionIconSpaceBlock: {
    marginLeft: 6,
    height: 13,
  },
  buttonSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
    backgroundColor: Color.m3SysLightOnSecondary,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  sfSymbolFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  buttonLayout: {
    height: 25,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
    backgroundColor: Color.m3SysLightOnSecondary,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  partialsIconFlexBox: {
    alignSelf: "stretch",
    flex: 1,
  },
  iconPosition2: {
    height: 24,
    width: 24,
    left: "50%",
    top: "50%",
    marginTop: -12,
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconmapPosition: {
    left: "0%",
    position: "absolute",
  },
  rowLayout: {
    width: 328,
    flexDirection: "row",
    position: "absolute",
  },
  storeTypo: {
    color: Color.inkDarkest,
    fontFamily: FontFamily.regularNormalRegular,
    lineHeight: 12,
    fontSize: FontSize.tinyNoneRegular_size,
    textAlign: "center",
  },
  iconPosition1: {
    width: 154,
    left: 0,
    position: "absolute",
  },
  cardLayout: {
    height: 186,
    flex: 1,
  },
  iconPosition: {
    height: 158,
    top: 0,
    position: "absolute",
  },
  topAppBar1: {
    top: 14,
    left: 74,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
  },
  iconcontrolsVerticalAlt: {
    top: 26,
    left: 359,
    width: 31,
    height: 45,
    position: "absolute",
  },
  topAppBar: {
    top: 28,
    left: -79,
    backgroundColor: "rgba(215, 228, 221, 0.08)",
    width: 375,
    height: 64,
    position: "absolute",
  },
  timeChild: {
    width: 4,
    height: 4,
    opacity: 0.5,
  },
  text: {
    fontFamily: FontFamily.m3LabelLarge,
    textAlign: "left",
    opacity: 0.6,
    marginLeft: 13,
  },
  time: {
    flexDirection: "row",
  },
  batteryChild: {
    borderRadius: Border.br_12xs,
    width: 14,
    height: 14,
  },
  batteryItem: {
    width: 17,
  },
  unionIcon: {
    width: 8,
  },
  battery: {
    width: 51,
    flexDirection: "row",
  },
  topSystembar: {
    top: -14,
    left: -5,
    paddingHorizontal: Padding.p_11xl,
    paddingTop: Padding.p_xl,
  },
  homeIndicator: {
    backgroundColor: Color.labelColorLightPrimary,
    width: 70,
    height: 3,
    borderRadius: Border.br_81xl,
  },
  systemBar: {
    top: 789,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 4,
    display: "none",
    left: 0,
    width: 360,
    justifyContent: "center",
    position: "absolute",
  },
  labelText: {
    lineHeight: 20,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.m3SysLightInverseSurface,
    fontWeight: "500",
    fontSize: FontSize.smallNormalRegular_size,
  },
  button: {
    left: 87,
    width: 49,
    height: 30,
    top: 102,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
  },
  button1: {
    top: 104,
    left: 237,
    width: 55,
  },
  button2: {
    top: 105,
    left: 150,
    width: 72,
  },
  button3: {
    left: 8,
    width: 69,
    height: 30,
    top: 102,
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
  },
  button4: {
    top: 109,
    left: 317,
    width: 57,
    height: 18,
  },
  icon: {
    marginLeft: -24,
  },
  partialsTabBarIconOnly: {
    backgroundColor: Color.m3SysLightOnSecondary,
  },
  partialsTabBarIconOnly1: {
    alignSelf: "stretch",
    flex: 1,
    width: "100%",
  },
  icon1: {
    marginLeft: -12,
  },
  iconmap: {
    height: "42.86%",
    width: "26.67%",
    top: "28.57%",
    right: "73.33%",
    bottom: "28.57%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  sfSymbol: {
    fontSize: FontSize.defaultBoldTitle3_size,
    lineHeight: 24,
    fontFamily: FontFamily.defaultRegularTitle2,
    color: Color.defaultSystemBlueLight,
    display: "none",
  },
  sfSymbolArrowtriangletur: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  icon2: {
    top: 18,
    left: 57,
    height: 22,
    flexDirection: "row",
    position: "absolute",
  },
  barsTabBarIconOnly: {
    right: 1,
    bottom: 0,
    left: -1,
    shadowColor: "rgba(20, 20, 20, 0.02)",
    shadowRadius: 1,
    elevation: 1,
    height: 56,
    backgroundColor: Color.m3SysLightOnSecondary,
    flexDirection: "row",
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 40,
    },
  },
  store: {
    width: 142,
  },
  text1: {
    top: 158,
    right: 0,
    borderBottomRightRadius: Border.br_9xs,
    borderBottomLeftRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: Color.skyLight,
    borderWidth: 1,
    padding: Padding.p_5xs,
    left: 0,
    position: "absolute",
  },
  tlchargement2Icon: {
    top: 4,
    height: 154,
  },
  tlchargement3Icon: {
    top: 5,
    height: 153,
  },
  card1: {
    marginLeft: 12,
  },
  row: {
    top: 204,
    left: 16,
  },
  kristsLuhaers582238UnsplashIcon: {
    left: 1,
    width: 157,
  },
  bestPlaces: {
    top: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  interiorInspiration: {
    height: 12,
    width: 142,
  },
  vieuxPortDeBizerte611Icon: {
    borderRadius: 2,
    width: 158,
    left: 0,
  },
  vectorIcon: {
    height: "9.78%",
    width: "13.23%",
    top: "7.53%",
    right: "8.29%",
    bottom: "82.69%",
    left: "78.48%",
    position: "absolute",
  },
  row1: {
    top: 466,
    left: 18,
  },
  homePage: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGhostwhite,
    shadowColor: "rgba(63, 82, 108, 0.4)",
    shadowRadius: 80,
    elevation: 80,
    height: 800,
    overflow: "hidden",
    flex: 1,
    width: "100%",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 40,
    },
  },
});

export default HomePage;

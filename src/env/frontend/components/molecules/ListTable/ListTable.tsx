import { s } from './ListTable.styles';
import { TProps } from './ListTable.types';
import { C } from '@/controls';
import { E } from '@/electrons';
import { useRender } from '@/hooks/react';

export const ListTable = <T,>(props: TProps<T>) => {
  const { panel, rows, cols, classes, className } = props;
  const { c, key } = useRender();

  const existsLabels = cols.find(({ label }) => Boolean(label));

  return (
    <E.Container
      component={E.Division}
      className={c(s.ListTable, classes?.Root, className)}
    >
      <E.Div className={s.ListTable__Inner}>
        <E.Table className={c(s.ListTable__Table, classes?.Table)}>
          <C.If condition={panel}>
            <E.TableCaption
              className={c(s.ListTable__Table__Caption, classes?.Caption)}
            >
              {panel}
            </E.TableCaption>
          </C.If>

          <C.If condition={existsLabels}>
            <E.TableHead className={s.ListTable__Table__Head}>
              <E.TR className={s.ListTable__Table__Row}>
                {cols.map(({ label, classes, width }) => {
                  return (
                    <E.TH
                      key={key.value}
                      style={{ width }}
                      className={c(
                        s.ListTable__Table__Cell,
                        s.ListTable__Table__Cell_header,
                        props?.classes?.Cell,
                        classes?.Header
                      )}
                    >
                      {label && label}
                    </E.TH>
                  );
                })}
              </E.TR>
            </E.TableHead>
          </C.If>

          <E.TableBody className={s.ListTable__Table__Body}>
            {rows?.map((row) => {
              return (
                <E.TR className={s.ListTable__Table__Row} key={key.value}>
                  {cols.map(({ classes, width, render }) => {
                    return (
                      <E.TD
                        key={key.value}
                        style={{ width }}
                        className={c(
                          s.ListTable__Table__Cell,
                          s.ListTable__Table__Cell_data,
                          props?.classes?.Cell,
                          classes?.Data
                        )}
                      >
                        {render(row)}
                      </E.TD>
                    );
                  })}
                </E.TR>
              );
            })}
          </E.TableBody>
        </E.Table>
      </E.Div>
    </E.Container>
  );
};

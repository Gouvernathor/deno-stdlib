// Copyright 2018-2025 the Deno authors. MIT license.

import { test } from "node:test";

import "../../collections/aggregate_groups_test.ts";
import "../../collections/associate_by_test.ts";
import "../../collections/associate_with_test.ts";
import "../../collections/chunk_test.ts";
import "../../collections/deep_merge_test.ts";
import "../../collections/distinct_by_test.ts";
import "../../collections/distinct_test.ts";
import "../../collections/drop_last_while_test.ts";
import "../../collections/drop_while_test.ts";
import "../../collections/filter_entries_test.ts";
import "../../collections/filter_keys_test.ts";
import "../../collections/filter_values_test.ts";
import "../../collections/find_single_test.ts";
import "../../collections/first_not_nullish_of_test.ts";
import "../../collections/includes_value_test.ts";
import "../../collections/intersect_test.ts";
import "../../collections/invert_by_test.ts";
import "../../collections/invert_test.ts";
import "../../collections/join_to_string_test.ts";
import "../../collections/map_entries_test.ts";
import "../../collections/map_keys_test.ts";
import "../../collections/map_not_nullish_test.ts";
import "../../collections/map_values_test.ts";
import "../../collections/max_by_test.ts";
import "../../collections/max_of_test.ts";
import "../../collections/max_with_test.ts";
import "../../collections/min_by_test.ts";
import "../../collections/min_of_test.ts";
import "../../collections/min_with_test.ts";
import "../../collections/omit_test.ts";
import "../../collections/partition_entries_test.ts";
import "../../collections/partition_test.ts";
import "../../collections/permutations_test.ts";
import "../../collections/pick_test.ts";
import "../../collections/reduce_groups_test.ts";
import "../../collections/running_reduce_test.ts";
import "../../collections/sample_test.ts";
import "../../collections/sliding_windows_test.ts";
import "../../collections/sort_by_test.ts";
import "../../collections/sum_of_test.ts";
import "../../collections/take_last_while_test.ts";
import "../../collections/take_while_test.ts";
import "../../collections/union_test.ts";
import "../../collections/unzip_test.ts";
import "../../collections/without_all_test.ts";
import "../../collections/zip_test.ts";
import "../../fs/_node_fs_file_test.ts";
import "../../fs/unstable_chown_test.ts";
import "../../fs/unstable_copy_file_test.ts";
import "../../fs/unstable_create.ts";
import "../../fs/unstable_link_test.ts";
import "../../fs/unstable_make_temp_dir_test.ts";
import "../../fs/unstable_make_temp_file_test.ts";
import "../../fs/unstable_mkdir_test.ts";
import "../../fs/unstable_open_test.ts";
import "../../fs/unstable_read_dir_test.ts";
import "../../fs/unstable_read_file_test.ts";
import "../../fs/unstable_read_link_test.ts";
import "../../fs/unstable_read_text_file_test.ts";
import "../../fs/unstable_real_path_test.ts";
import "../../fs/unstable_remove_test.ts";
import "../../fs/unstable_rename_test.ts";
import "../../fs/unstable_stat_test.ts";
import "../../fs/unstable_symlink_test.ts";
import "../../fs/unstable_truncate_test.ts";
import "../../fs/unstable_write_file_test.ts";
import "../../fs/unstable_write_text_file_test.ts";
import "../../fs/unstable_lstat_test.ts";
import "../../fs/unstable_chmod_test.ts";
import "../../fs/unstable_umask_test.ts";
import "../../fs/unstable_utime_test.ts";

for (const testDef of testDefinitions) {
  if (testDef.ignore) {
    test.skip(testDef.name, testDef.fn);
  } else {
    test(testDef.name, testDef.fn);
  }
}
